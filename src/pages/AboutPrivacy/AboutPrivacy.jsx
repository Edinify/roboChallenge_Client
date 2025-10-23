import React from "react";
import "./style.css";
import Header from "../EnterPage/components/Header/Header";
import { useNavigate } from "react-router-dom";

const AboutPrivacy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
     
      <div className="ap-wrap">
         <button className="back-btn"  onClick={handleBack}>
        Geri
      </button>
        <section className="ap-section">
          <div className="ap-eyebrow">HAQQINDA VƏ MƏXFİLİK</div>
          <h1 className="ap-title">Haqqımızda</h1>

          <div className="ap-panel">
            <p>
              Robot Challenge tələbələri, həvəskarları və peşəkarları təhlükəsiz
              və ədalətli yarışlarda praktiki robotikanı inkişaf etdirmək üçün
              birləşdirir.
            </p>
            <ul className="ap-list">
              <li>
                Şirkətin adı <br /> <b>Entesk MMC</b>.
              </li>
              <li>
                VÖEN <br /> <b>1309404831</b>.
              </li>
              <li>
                Ünvan <br />{" "}
                <b>Azərbaycan, Bakı, Yasamal ray., Şərifzadə ev. 23A</b>.
              </li>
            </ul>
          </div>
        </section>

        {/* MƏXFİLİK SİYASƏTİ */}
        <section className="ap-section">
          <div className="ap-eyebrow">HAQQINDA VƏ MƏXFİLİK</div>
          <h2 className="ap-title">Məxfilik siyasəti</h2>

          <div className="ap-banner">
            Məxfiliyinizə önəm veririk. Bu bildiriş hansı məlumatları
            topladığımızı və necə istifadə etdiyimizi izah edir.
          </div>

          <div className="ap-grid">
            <div className="ap-card">
              <h3 className="ap-card-title">
                Şəxsi məlumatlardan necə istifadə edirik
              </h3>
              <ul className="ap-bullets">
                <li>
                  Şəxsi məlumatlarınız veb-saytın fəaliyyətinin analitik
                  ehtiyacları və sizinlə əlaqə üçün istifadə oluna bilər
                  (telefon və ya e-poçt).
                </li>
                <li>
                  Razılığınız olmadan şəxsi məlumatlarınız üçüncü tərəfə
                  ötürülməyəcək və qeyri-qanuni məqsədlərlə istifadəsinə yol
                  verilməyəcək.
                </li>
              </ul>
            </div>

            <div className="ap-card">
              <h3 className="ap-card-title">Məlumatdan istifadə</h3>
              <ul className="ap-bullets">
                <li>Qeydiyyatların emalı və tədbirin təşkili.</li>
                <li>
                  Cədvəl, qaydalar və təhlükəsizlik yeniləmələri üçün əlaqə.
                </li>
                <li>Sui-istifadə və fırıldaqçılığın qarşısının alınması.</li>
                <li>Razılıqla: tədbirin foto/video materialları.</li>
              </ul>
            </div>

            <div className="ap-card">
              <h3 className="ap-card-title">Veb brauzer kukiləri</h3>
              <ul className="ap-bullets">
                <li>
                  İstifadə təcrübəsini yaxşılaşdırmaq üçün “kukilər”dən istifadə
                  olunur. Brauzerdə kukiləri silmək və ya bloklamaq mümkündür;
                  bu halda saytın bəzi hissələri məhdud işləyə bilər.
                </li>
              </ul>
            </div>

            <div className="ap-card">
              <h3 className="ap-card-title">
                Şəxsi məlumatlarınızı idarə olunması
              </h3>
              <ul className="ap-bullets">
                <li>
                  Şəxsi məlumatlarınıza giriş, düzəliş və silmə hüququnuz var.
                  Hesab parametrlərindən bunu həyata keçirə bilərsiniz.
                </li>
              </ul>
            </div>

            <div className="ap-card">
              <h3 className="ap-card-title">Hüquqlarınız</h3>
              <ul className="ap-bullets">
                <li>Şəxsi məlumatlarınıza giriş, düzəliş və silmə.</li>
                <li>İstənilən vaxt razılığı geri götürmə.</li>
              </ul>
            </div>

            <div className="ap-card">
              <h3 className="ap-card-title">Əlaqə</h3>
              <ul className="ap-bullets">
                <li>
                  Məxfilik sualları:{" "}
                  <a href="mailto:contact@entesk.com">contact@entesk.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPrivacy;
