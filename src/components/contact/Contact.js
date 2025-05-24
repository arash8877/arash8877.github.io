import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact wrapper">
      <div className="section-gap"></div>
      <h2 className="section-title">{t("Kontakt")}</h2>
      <div className="contact-options">
        <a
          href="https://www.google.com/maps/place/2830+Virum/@55.7591537,12.4852287,11.46z/data=!4m6!3m5!1s0x46524f0540c4f3b9:0x5d12b7ac95e3bcfd!8m2!3d55.794614!4d12.461796!16zL20vMDYybDl5?authuser=0&entry=ttu"
          className="contact-option"
          target="blank"
        >
          <div className="icon-container">
            <i className="fa-solid fa-map-location-dot fa-lg"></i>
          </div>
          <p>Virum</p>
        </a>
        <div className="contact-option">
          <div className="icon-container">
            <i className="fa-solid fa-phone fa-lg"></i>
          </div>
          <a href="tel:+4522612022">22 61 20 22</a>
        </div>
        <a href="mailto:arash8877@gmail.com" className="contact-option">
          <div className="icon-container">
            <i className="fa-solid fa-envelope fa-lg"></i>
          </div>
          <p >arash8877@gmail.com</p>
        </a>
        <a href="https://github.com/arash8877" target="blank" className="contact-option">
          <div className="icon-container">
            <i class="fa-brands fa-github"></i>
          </div>
          <p>
            github.com/arash8877
          </p>
        </a>
      </div>
    </section>
  );
};




export default Contact;
