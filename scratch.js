const fs = require('fs');

let content = fs.readFileSync('data/pdfMapping.ts', 'utf8');

content = content.replace(
  /export const PDF_MAPPING: Record<string, PDFSection> = \{/,
  "const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_SERVER_URL || '';\n\nexport const PDF_MAPPING: Record<string, PDFSection> = {"
);

content = content.replace(/pdfPath:\s*'(pdf\/annual-report\/[^']+)'/g, "pdfPath: `${ASSETS_URL}/$1`");
content = content.replace(/pdfPath:\s*"(pdf\/annual-report\/[^"]+)"/g, "pdfPath: `${ASSETS_URL}/$1`");

fs.writeFileSync('data/pdfMapping.ts', content);
