import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const PaymentResult = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);
  const status = query.get("status"); 

  return (
    <div className="payment-page">
      <div className="payment-card">
        {status === "success" ? (
          <>
            <div className="icon success-icon">✔</div>
            <h2>Ödəniş uğurlu oldu!</h2>
            <p>İmtahan qeydiyyatınız tamamlandı.</p>
            <button onClick={() => navigate("/myExams")} className="back-btn">
              Davam et
            </button>
          </>
        ) : (
          <>
            <div className="icon error-icon">✖</div>
            <h2>Ödəniş alınmadı</h2>
            <p>Yenidən cəhd edin və ya bizimlə əlaqə saxlayın.</p>
            <button onClick={() => navigate("/payment")} className="back-btn">
              Yenidən cəhd et
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentResult;
