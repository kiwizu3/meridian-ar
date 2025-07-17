export default function DownloadPDFButton() {
  return (
    <button className="download-pdf-button">
      <span className="download-pdf-text">Download PDF</span>
      <span className="download-pdf-icon-wrapper">
        <span className="download-pdf-icon">
          <img src="/images/report/ant-design_file-pdf-filled.png" alt="PDF Icon" />
        </span>
      </span>
    </button>
  );
}
