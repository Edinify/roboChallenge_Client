import { useEffect, useMemo, useState } from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";

import { useCreateStudyMaterialMutation } from "../../services/studyMaterials/studyMaterialsApi";
import { openStudyMaterialModal } from "../../services/studyMaterials/studyModal";

const initialExamData = {
  title: "",
  pdfUrl: "", 
};

const StudyMaterialModal = () => {
  const dispatch = useDispatch();
  const { studyMaterial } = useSelector((state) => state.studyModal );

  const [studyData, setStudyData] = useState(initialExamData);
  const [pdfFile, setPdfFile] = useState(null); // seçilən PDF fayl
  const [error, setError] = useState("");

  const [createStudyMaterial, { isLoading: createLoading }] =
    useCreateStudyMaterialMutation();

  const closeModal = () => dispatch(openStudyMaterialModal(false));

  // Edit modunda data doldurmaq (əgər studyMaterial pass olunursa)
  useEffect(() => {
    if (studyMaterial) {
      setStudyData({
        title: studyMaterial.title ?? "",
        pdfUrl: studyMaterial.pdfUrl ?? "",
      });
      setPdfFile(null);
    } else {
      setStudyData(initialExamData);
      setPdfFile(null);
    }
  }, [studyMaterial]);

  // Seçilən PDF üçün müvəqqəti download link (preview / download)
  const tempPdfUrl = useMemo(() => {
    if (!pdfFile) return "";
    return URL.createObjectURL(pdfFile);
  }, [pdfFile]);

  useEffect(() => {
    return () => {
      if (tempPdfUrl) URL.revokeObjectURL(tempPdfUrl);
    };
  }, [tempPdfUrl]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudyData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setError("");
    const file = e.target.files?.[0];
    if (!file) {
      setPdfFile(null);
      return;
    }
    if (file.type !== "application/pdf") {
      setError("Yalnız PDF fayl yükləyin.");
      setPdfFile(null);
      return;
    }
    // (opsional) ölçü limiti: 10MB
    const MAX = 10 * 1024 * 1024;
    if (file.size > MAX) {
      setError("Fayl ölçüsü 10MB-dan böyükdür.");
      setPdfFile(null);
      return;
    }
    setPdfFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!studyData.title.trim()) {
      setError("Title tələb olunur.");
      return;
    }
    if (!pdfFile && !studyData.pdfUrl) {
      setError("PDF seçin və ya PDF URL göstərin.");
      return;
    }

    try {
      // Backend multipart gözləyirsə:
      const formData = new FormData();
      formData.append("title", studyData.title.trim());

      // Fayl seçilibsə, faylı göndər
      if (pdfFile) {
        formData.append("pdf", pdfFile); // <-- backend 'pdf' adlı field gözləsin
      } else if (studyData.pdfUrl) {
        // Yalnız URL göndərmək istəyirsənsə:
        formData.append("pdf", studyData.pdfUrl.trim());
      }

      await createStudyMaterial(formData).unwrap();

      setStudyData(initialExamData);
      setPdfFile(null);
      closeModal();
    } catch (err) {
      console.log(err);
      setError(err?.data?.message || "Yükləmə zamanı xəta baş verdi.");
    }
  };

  return (
    <div className="admin-modal">
      <div className="modal-container">
        <div className="modal-header">
          <span onClick={closeModal} role="button">
            ✕
          </span>
          <h4>{studyMaterial?._id ? "Update Material" : "Create Material"}</h4>
        </div>

        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          encType="multipart/form-data"
        >
          <label>Title *</label>
          <input
            type="text"
            name="title"
            value={studyData.title}
            onChange={handleChange}
            placeholder="Material title"
            required
          />

          <label>PDF fayl </label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />

          {/* Seçilən PDF üçün bax/yüklə düymələri (preview download) */}
          {pdfFile && (
            <div className="preview-row">
              <span className="preview-name">{pdfFile.name}</span>
              <div className="preview-actions">
                <a
                  href={tempPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Bax
                </a>
                <a
                  href={tempPdfUrl}
                  download={pdfFile.name}
                  className="btn btn-primary"
                >
                  Yüklə
                </a>
              </div>
            </div>
          )}

          {error && <div className="form-error">{error}</div>}

          <button
            type="submit"
            className="primary-btn"
            disabled={createLoading}
          >
            {createLoading
              ? "Yüklənir..."
              : studyMaterial?._id
              ? "Update"
              : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudyMaterialModal;
