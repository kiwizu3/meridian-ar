import { NextResponse } from 'next/server';

import { join } from 'path';
import fs from 'fs/promises';
import { PDFDocument } from 'pdf-lib';
import { PDF_MAPPING } from '../../../data/pdfMapping';

export async function POST(req: Request) {
  try {
    const { selectedSections } = await req.json();
    if (!Array.isArray(selectedSections) || selectedSections.length === 0) {
      return NextResponse.json({ error: 'No sections selected.' }, { status: 400 });
    }

    // Load all valid PDF files in parallel
    const pdfInfos = await Promise.all(
      selectedSections.map(async (sectionId) => {
        const mapping = PDF_MAPPING[sectionId];
        if (!mapping || !mapping.pdfPath) return null;
        try {
          let pdfBytes;
          if (mapping.pdfPath.startsWith('http')) {
            const res = await fetch(mapping.pdfPath);
            if (!res.ok) throw new Error(`Failed to fetch PDF: ${res.statusText}`);
            const arrayBuffer = await res.arrayBuffer();
            pdfBytes = new Uint8Array(arrayBuffer);
          } else {
            const absPath = join(process.cwd(), 'public', mapping.pdfPath);
            pdfBytes = await fs.readFile(absPath);
          }
          const pdfDoc = await PDFDocument.load(pdfBytes);
          return { pdfDoc };
        } catch (e) {
          console.error(`Error loading PDF for section ${sectionId}:`, e);
          return null;
        }
      })
    );
    const validPdfs = pdfInfos.filter(Boolean);
    if (validPdfs.length === 0) {
      return NextResponse.json({ error: 'No valid PDFs found for selected sections.' }, { status: 404 });
    }
    // Merge all pages in order
    const mergedPdf = await PDFDocument.create();
    // Sequentially merge all pages to avoid await-in-loop lint error
    await validPdfs.reduce(async (prevPromise, pdfInfo) => {
      await prevPromise;
      const pdfDoc = pdfInfo?.pdfDoc;
      if (pdfDoc) {
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }
      return Promise.resolve();
    }, Promise.resolve());
    const mergedBytes = await mergedPdf.save();
    return new NextResponse(Buffer.from(mergedBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=LB_Finance_Custom_Report.pdf',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Report generation failed. Please try again.' }, { status: 500 });
  }
}