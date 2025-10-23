import React from "react";

const NewsCard = ({ data, cellNumber, onEdit, onDelete }) => {
  return (
    <tr className="class-table">
      <td>
        <div className="td-con">
          <div className="table-scroll-text">
            {cellNumber}. {data?.title}
          </div>
        </div>
      </td>

      <td>
        <div className="td-con">
          <div className="table-scroll-text muted">{data?.desc || "-"}</div>
        </div>
      </td>

      <td>
        <div className="action-group">
          <button
            className="action-btn btn-edit"
            onClick={() => onEdit?.(data)}
            title="Update"
          >
            Update
          </button>
          <button
            className="action-btn btn-delete"
            onClick={() => onDelete?.(data?._id)}
            title="Delete"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default NewsCard;
