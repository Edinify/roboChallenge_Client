import "./style.css";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-page success">
      <div className="payment-card">
        <div className="icon success-icon">✔</div>
        <h2>Ödəniş uğurla həyata keçirildi!</h2>
        <p>Təbriklər! Sizin imtahana qeydiyyatınız tamamlandı.</p>
        <button onClick={() => navigate("/myExams")} className="back-btn">
          İmtahanlarım səhifəsinə keç
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
