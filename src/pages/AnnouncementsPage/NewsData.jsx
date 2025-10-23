import { useDispatch } from "react-redux";
import {
  useGetAllNewsQuery,
  useDeleteNewsMutation,
} from "../../services/news/newsApi";
import { openNewsModal, setNews } from "../../services/news/newsModalSlice";
import NewsCard from "./NewsCard";

const NewsData = () => {
  const { data: news, isLoading, isError } = useGetAllNewsQuery();

  const dispatch = useDispatch();
  const [deleteNews] = useDeleteNewsMutation();

  const tableHead = [
    { id: 1, label: "Title" },

    { id: 3, label: "Description" },

    { id: 9, label: "" },
  ];

  const handleEdit = (exam) => {
    dispatch(openNewsModal(true));
    dispatch(setNews(exam));
  };

  const handleDelete = async (id) => {
    await deleteNews(id).unwrap();
  };

  if (isLoading) {
    return <div className="table-loader">Yüklənir...</div>;
  }

  if (isError) {
    return (
      <div className="table-error">
        Xəta baş verdi. Zəhmət olmasa yenidən yoxlayın.
      </div>
    );
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
          {news?.length ? (
            news.map((data, i) => (
              <NewsCard
                key={data._id}
                data={data}
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

export default NewsData;
