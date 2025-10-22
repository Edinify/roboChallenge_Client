import { useEffect, useState } from "react";
import "./modal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateExamMutation,
  useUpdateExamMutation,
} from "../../services/exams/examsApi";
import { openExamModal } from "../../services/exams/examModalSlice";

const initialExamData = {
  title: "",
  description: "",
  subject: "",
  language: "az",
  date: "",
  during: 1,
  price: "",
  isActive: true,
};

const ExamModal = () => {
  const dispatch = useDispatch();
  const { exam } = useSelector((state) => state.examModal);

  const [examData, setExamData] = useState(initialExamData);

  const [createExam, { isLoading: createLoading }] = useCreateExamMutation();
  const [updateExam, { isLoading: updateLoading }] = useUpdateExamMutation();

  const closeModal = () => dispatch(openExamModal(false));

  useEffect(() => {
    if (exam) {
      setExamData({
        title: exam.title ?? "",
        subject: exam.subject ?? "",
        description: exam.description ?? "",
        language: exam.language ?? "az",
        date: exam.date ? toDatetimeLocal(exam.date) : "",
        during: exam.during ?? 1,
        price: exam.price ?? 0,
        isActive: exam.isActive ?? true,
      });
    }
  }, [exam]);

  const toDatetimeLocal = (d) => {
    const date = new Date(d);
    const tzOff = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - tzOff).toISOString().slice(0, 16);
  };

  const fromDatetimeLocal = (v) => {
    // input: "2026-02-15T09:00" → ISO
    return new Date(v).toISOString();
  };

  // Handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setExamData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? value === ""
            ? ""
            : Number(value)
          : name === "date"
          ? value
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: examData.title.trim(),
      subject: examData.subject.trim(),
      description: examData.description.trim(),
      language: examData.language,
      date: fromDatetimeLocal(examData.date),
      during: Number(examData.during),
      price: Number(examData.price),
      isActive: Boolean(examData.isActive),
    };
    try {
      if (exam?._id) {
        await updateExam({
          id: exam._id,
          ...payload,
        }).unwrap();
      } else {
        await createExam(payload).unwrap();
      }
      setExamData(initialExamData);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-modal">
      <div className="modal-container">
        <div className="modal-header">
          <span onClick={closeModal}>X</span>
          <h4>{exam?._id ? "Update Exam" : "Create Exam"}</h4>
        </div>

        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
          encType="multipart/form-data"
        >
          <label>Exam title </label>
          <input
            type="text"
            name="title"
            value={examData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <label>Subject </label>
          <input
            type="text"
            name="subject"
            value={examData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
          <label>Description </label>
          <textarea
            name="description"
            value={examData.description}
            onChange={handleChange}
            placeholder="Description"
            rows={4}
            cols={50}
          />

          <label>Date </label>
          <input
            type="date"
            name="date"
            value={examData.date}
            onChange={handleChange}
            placeholder="Date"
          />
          <label>During </label>
          <input
            type="number"
            name="during"
            value={examData.during}
            onChange={handleChange}
            placeholder="During"
          />

          <label>Language *</label>
          <select
            name="language"
            value={examData.language}
            onChange={handleChange}
          >
            <option value="az">Azerbaijani (az)</option>
            <option value="en">English (en)</option>
            <option value="tr">Turkish (tr)</option>
            <option value="ru">Russian (ru)</option>
          </select>
          <label>Price </label>
          <input
            type="number"
            name="price"
            value={examData.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <label className="row-check">
            <input
              type="checkbox"
              name="isActive"
              checked={examData.isActive}
              onChange={handleChange}
            />
            <span>Active</span>
          </label>

          <button type="submit">
            {exam?._id ? "Update Exam" : "Create Exam"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExamModal;
