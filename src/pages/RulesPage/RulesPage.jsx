import React, { useState } from "react";
import firstRules from "../../assets/rules/RC-RCCODEC++.pdf";
import secondRules from "../../assets/rules/RC-RCCODEPYTHON.pdf";
import thirdRules from "../../assets/rules/RC-RCCODESCRATCH.pdf";
import "./style.css"
const files = [
  { id: 1, title: "CODEC", url: firstRules },
  { id: 2, title: "PHYTON", url: secondRules },
  { id: 3, title: "SCRATCH", url: thirdRules },
];

const RulesPage = () => {
  const [downloadingId, setDownloadingId] = useState(null);

  const forceDownload = async (file) => {
    try {
      setDownloadingId(file.id);
      const res = await fetch(file.url, { mode: "cors" });
      if (!res.ok) throw new Error("Network response was not ok");
      const blob = await res.blob();

      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      const safeName = file.title.replace(/[^\w\-]+/g, "_");
      a.download = `${safeName}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    } catch (e) {
      window.open(file.url, "_blank", "noopener,noreferrer");
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="rules-page">
      <h2>Qaydalar (PDF)</h2>

      <div className="rules-grid">
        {files.map((file) => (
          <div key={file.id} className="rule-card">
            <div className="rule-icon">PDF</div>

            <div className="rule-meta">
              <h4 className="rule-title">{file.title}</h4>
            </div>

            <div className="rule-actions">
              <a
                className="btn btn-outline"
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Bax
              </a>

              <button
                className="btn btn-primary"
                onClick={() => forceDownload(file)}
                disabled={downloadingId === file.id}
              >
                {downloadingId === file.id ? "Yüklənir..." : "Yüklə"}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RulesPage;
