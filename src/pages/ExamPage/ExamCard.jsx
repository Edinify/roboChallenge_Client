import React from "react";

const formatDate = (iso) => {
  try {
    const d = new Date(iso);
    // Dilini istəyə görə dəyişə bilərsən
    return d.toLocaleString("az-Latn-AZ", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "-";
  }
};

const currency = (n) =>
  typeof n === "number" ? `${n.toFixed(2)} ₼` : "-";

const ExamCard = ({ exam, cellNumber, onEdit, onDelete }) => {
  return (
    <tr className="class-table">
      {/* Title */}
      <td>
        <div className="td-con">
          <div className="table-scroll-text">
            {cellNumber}. {exam?.title}
          </div>
        </div>
      </td>

      {/* Subject */}
      <td>
        <div className="td-con">
          <div className="table-scroll-text">{exam?.subject}</div>
        </div>
      </td>

      {/* Description */}
      <td>
        <div className="td-con">
          <div className="table-scroll-text muted">{exam?.description || "-"}</div>
        </div>
      </td>

      {/* Language */}
      <td>
        <span className="badge">{exam?.language?.toUpperCase()}</span>
      </td>

      {/* Date */}
      <td>
        <div className="td-con">
          <div className="table-scroll-text">{formatDate(exam?.date)}</div>
        </div>
      </td>

      {/* During */}
      <td>
        <div className="td-con center">{exam?.during ?? "-"}</div>
      </td>

      {/* Price */}
      <td>
        <div className="td-con right">
          {typeof exam?.price === "number" ? currency(exam.price) : "-"}
        </div>
      </td>

      {/* Status */}
      <td>
        <span className={`status-pill ${exam?.isActive ? "active" : "inactive"}`}>
          {exam?.isActive ? "Active" : "Inactive"}
        </span>
      </td>

      {/* Actions */}
      <td>
        <div className="action-group">
          <button
            className="action-btn btn-edit"
            onClick={() => onEdit?.(exam)}
            title="Update"
          >
            Update
          </button>
          <button
            className="action-btn btn-delete"
            onClick={() => onDelete?.(exam?._id)}
            title="Delete"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExamCard;
