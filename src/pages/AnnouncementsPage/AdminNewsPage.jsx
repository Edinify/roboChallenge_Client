import React from 'react'
import GlobalHead from '../../components/GlobalHead/GlobalHead'
import { useDispatch } from 'react-redux';
import { openNewsModal, setNews } from '../../services/news/newsModalSlice';
import NewsData from './NewsData';

const AdminNewsPage = () => {
 const dispatch = useDispatch();

  const openModal = () => {
    dispatch(openNewsModal(true));
    dispatch(setNews({}));
  };

  return (
    <div className="details-page career-page ">
      <GlobalHead openModal={openModal} />
      <NewsData/>
    </div>
  )
}

export default AdminNewsPage