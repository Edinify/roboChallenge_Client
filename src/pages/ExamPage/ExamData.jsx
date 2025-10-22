import React from "react";
import ExamCard from "./ExamCard";
import { useDeleteExamMutation, useGetAllExamsQuery } from "../../services/exams/examsApi";
import { useDispatch } from "react-redux";
import { openExamModal, setExam } from "../../services/exams/examModalSlice";


const ExamData = () => {
  const { data: exams, isLoading, isError } = useGetAllExamsQuery();
  const dispatch = useDispatch();
  const [deleteExam] = useDeleteExamMutation();

  const tableHead = [
    { id: 1, label: "Title" },
    { id: 2, label: "Subject" },
    { id: 3, label: "Description" },
    { id: 4, label: "Language" },
    { id: 5, label: "Date" },
    { id: 6, label: "During (h)" },
    { id: 7, label: "Price" },
    { id: 8, label: "Status" },
    { id: 9, label: "Actions" },
  ];

  const handleEdit = (exam) => {
    dispatch(openExamModal(true));
    dispatch(setExam(exam));
  };

  const handleDelete = async (id) => {
    await deleteExam(id).unwrap();
    console.log("DELETE ->", id);
  };

  if (isLoading) {
    return (
      <div className="table-loader">Yüklənir...</div>
    );
  }

  if (isError) {
    return <div className="table-error">Xəta baş verdi. Zəhmət olmasa yenidən yoxlayın.</div>;
  }

  return (
    <div className="table-wrapper">
      <table className="details-table courses-table">
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th className="table-head-w" key={head.id}>
                {head.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {exams?.length ? (
            exams.map((exam, i) => (
              <ExamCard
                key={exam._id}
                exam={exam}
                cellNumber={i + 1}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan={tableHead.length} className="empty-cell">
                Hələ heç bir imtahan yoxdur.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExamData;
