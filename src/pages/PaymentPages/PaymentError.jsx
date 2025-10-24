import "./style.css";
import { useNavigate } from "react-router-dom";

const PaymentError = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-page error">
      <div className="payment-card">
        <div className="icon error-icon">✖</div>
        <h2>Ödəniş zamanı xəta baş verdi</h2>
        <p>Zəhmət olmasa yenidən cəhd edin və ya əlaqə saxlayın.</p>
        <button onClick={() => navigate("/payment")} className="back-btn">
          Yenidən cəhd et
        </button>
      </div>
    </div>
  );
};

export default PaymentError;
