import { useDispatch } from "react-redux";
import "./style.css";
import { openContactModal } from "../../../services/student/contactModal";
const ContactModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(openContactModal(false));
  };
  return (
    <div className="contact-modal">
      <div className="contact-modal-container">
        <div className="close-modal" onClick={closeModal}>
          <span>X</span>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            vel officiis vitae veniam, natus alias aliquam labore neque
            cupiditate fuga!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
