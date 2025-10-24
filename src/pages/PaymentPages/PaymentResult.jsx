import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

const PaymentResult = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(search);
  const status = query.get("status"); // success | error

  const paymentData = {
    statusText:
      status === "success" ? "Tam ödəniş alındı" : "Ödəniş uğursuz oldu",
    amount: "USD 181.50",
    method: "Kredit/debet kartı",
    date: "2025-10-23 23:35:38",
    subtotal: "USD 181.50",
    shipping: "PULSUZ",
    total: "USD 181.50",
  };

  return (
    <div className="payment-result-page">
      <div className="payment-section">
        {/* SOL TƏRƏF */}
        <div className="payment-details">
          <h3>Ödəniş detalları</h3>
          <p className="payment-status">{paymentData.statusText}</p>
          <p className="payment-amount">({paymentData.amount})</p>
          <p className="payment-method">{paymentData.method}</p>
          <p className="payment-date">
            Tarix: {paymentData.date}
          </p>

          <div className="payment-buttons">
            <button className="history-btn">Ödəniş tarixçəsi</button>
            <button className="receipt-btn">Qəbzi yüklə</button>
          </div>
        </div>

        {/* SAĞ TƏRƏF */}
        <div className="payment-summary">
          <h3>Yekun məlumat</h3>
          <div className="summary-item">
            <span>Məhsul məbləği</span>
            <span>{paymentData.subtotal}</span>
          </div>
          <div className="summary-item">
            <span>Çatdırılma</span>
            <span className="free">{paymentData.shipping}</span>
          </div>
          <hr />
          <div className="summary-item subtotal">
            <span>Cəmi</span>
            <span>{paymentData.subtotal}</span>
          </div>
          <div className="summary-item total">
            <span>Ümumi məbləğ</span>
            <span>{paymentData.total}</span>
          </div>
          <p className="note">
            * Göstərilən məbləğ ödəniş komissiyasını əhatə etmir.{" "}
            <span className="link">Tarixçəyə bax</span>
          </p>
        </div>
      </div>

      <div className="bottom-btn">
        <button
          className="back-btn"
          onClick={() =>
            navigate(status === "success" ? "/myExams" : "/payments")
          }
        >
          {status === "success" ? "Davam et" : "Yenidən cəhd et"}
        </button>
      </div>
    </div>
  );
};

export default PaymentResult;
