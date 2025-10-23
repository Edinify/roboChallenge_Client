import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const address =
    ("contact.address_value",
    "Azərbaycan, Bakı, Yasamal ray, Şərifzadə ev.237A .");

  const mapEmbedSrc = (q) =>
    `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="contact-page">
      <button className="back-btn" onClick={handleBack}>
        Geri
      </button>
      <div className="contact-header">
        <span className="contact-subtitle">ƏLAQƏ</span>
        <h1 className="contact-title">Contact</h1>
      </div>

      <div className="contact-info">
        <div className="contact-box">
          <h3>HEAD OFFICE</h3>
          <p>Azərbaycan, Bakı, Yasamal ray, Şərifzadə ev.237A.</p>
        </div>
        <div className="contact-box">
          <h3>PHONE</h3>
          <p>+994 55 945 04 12</p>
        </div>
        <div className="contact-box">
          <h3>EMAIL FOR PROPOSALS</h3>
          <p>contact@entesk.com</p>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src={mapEmbedSrc(address)}
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
