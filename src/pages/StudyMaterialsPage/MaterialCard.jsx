import React, { useMemo, useState } from "react";
import { useDeleteStudyMaterialMutation } from "../../services/studyMaterials/studyMaterialsApi";
import { useGetUserQuery } from "../../services/auth/authApi";

const FILE_BASE = import.meta.env.VITE_FILES_BASE || "http://localhost:4000";
const toAbsoluteUrl = (u) => {
  if (!u) return "";
  if (/^https?:\/\//i.test(u)) return u;
  return `${FILE_BASE.replace(/\/$/, "")}/${String(u).replace(/^\//, "")}`;
};

const MaterialCard = ({ material }) => {
  const [downloading, setDownloading] = useState(false);

  const { data: user } = useGetUserQuery();

  const [deleteStudyMaterial] = useDeleteStudyMaterialMutation();

  const deleteMaterial = async (id) => {
    try {
      await deleteStudyMaterial(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const absolutePdfUrl = useMemo(
    () => toAbsoluteUrl(material?.pdfUrl),
    [material?.pdfUrl]
  );

  const forceDownload = async (url, filename = "material") => {
    try {
      setDownloading(true);
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) throw new Error("Network response was not ok");
      const blob = await res.blob();

      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      const safeName = String(filename).replace(/[^\w\-]+/g, "_");
      // uzantı olaraq .pdf istifadə edirik
      a.download = `${safeName}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    } catch (e) {
      // CORS bloklanırsa yeni tabda aç
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="material-card">
      <div className="mc-subject">{material?.title}</div>

      <button
        type="button"
        className="mc-title"
        onClick={() => forceDownload(absolutePdfUrl, material?.title)}
        disabled={!absolutePdfUrl || downloading}
        title="Study material"
      >
        Study Materials
      </button>

      <div className="mc-body" />
      {user?.role === "super-admin" && (
        <div
          className="delete-material-btn"
          onClick={() => deleteMaterial(material?._id)}
        >
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};

export default MaterialCard;
