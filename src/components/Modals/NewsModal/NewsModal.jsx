import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openNewsModal } from "../../../services/news/newsModalSlice";
import {
  useCreateNewsMutation,
  useUpdateNewsMutation,
} from "../../../services/news/newsApi";

const initialNewsData = {
  title: "",
  desc: "",
};

const NewsModal = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.newsModal);



  const [newsData, setNewsData] = useState(initialNewsData);
  const [error, setError] = useState("");

  const [createNews, { isLoading: createLoading }] = useCreateNewsMutation();
  const [updateNews] = useUpdateNewsMutation();

  const closeModal = () => dispatch(openNewsModal(false));

  useEffect(() => {
    if (news) {
      setNewsData({
        title: news.title ?? "",
        desc: news.desc ?? "",
      });
    } else {
      setNewsData(initialNewsData);
    }
  }, [news]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!newsData.title.trim()) {
      setError("Title tələb olunur.");
      return;
    }

    const payload = {
      title: newsData.title,
      desc: newsData.desc,
    };
    try {
      if (news?._id) {
        await updateNews({
          id: news._id,
          ...payload,
        });
      } else {
        await createNews(payload);
      }
      setNewsData(initialNewsData);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-modal">
      <div className="modal-container">
        <div className="modal-header">
          <span onClick={closeModal} role="button">
            ✕
          </span>
          <h4>{news?._id ? "Update News" : "Create News"}</h4>
        </div>

        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        >
          <label>Title *</label>
          <input
            type="text"
            name="title"
            value={newsData.title}
            onChange={handleChange}
            placeholder="News title"
            required
          />

          <label>Description *</label>
          <input
            type="text"
            name="desc"
            value={newsData.desc}
            onChange={handleChange}
            placeholder="News desc"
            required
          />

          {error && <div className="form-error">{error}</div>}

          <button
            type="submit"
            className="primary-btn"
            disabled={createLoading}
          >
            {createLoading ? "Yüklənir..." : news?._id ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsModal;
