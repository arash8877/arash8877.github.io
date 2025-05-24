import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about">
      <div className="section-gap"></div>
      <section className="about wrapper">
        <div className="about-image">
          <img src="/assets/developer2.png" alt="developer" />
        </div>
        <div className="about-right">
          <h2 className="section-title">{t("Om Mig")}</h2>
          <p className="gray">
            {t(
              "Jeg er frontend-udvikler med en stærk interesse for full-stack-udvikling og en baggrund inden for elektroteknik. Oprindeligt fra Iran har jeg boet i Danmark i 14 år. Jeg har med succes gennemført over 15 projekter samt et intensivt 10-måneders full-stack-bootcamp. Med en kombination af teknisk ekspertise, stærke samarbejdsevner og gode interpersonelle færdigheder trives jeg i samarbejdsorienterede miljøer og udmærker mig ved at løse komplekse problemer."
            )}
          </p>
          <div className="two_ul_container">
            <ul className="about-list">
              <li>{t("Navn")} :</li>
              <li>{t("Mobil")} :</li>
              <li>{t("Email")} :</li>
              <li>{t("Bopæl")} :</li>
              <li>{t("Sprog")} :</li>
            </ul>
            <ul className="answer-list">
              <li>Arash Abdollahi</li>
              <li>22 61 20 22</li>
              <li>arash8877@gmail.com</li>
              <li>Virum</li>
              <li>{t("Dansk - Engelsk")}</li>
            </ul>
          </div>
          <a
            href="/assets/MyCV-Arash.pdf"
            download="MyCV-Arash.pdf"
            target="_blank"
            id="cv-btn"
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
