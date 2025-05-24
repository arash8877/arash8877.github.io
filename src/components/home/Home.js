import React from "react";
import './Home.css';
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation();

  return (
    <>
      <section className="home wrapper">
        <div className="general-info">
          <span id="hi" className="orange">{t("Hej !")}</span>
          <h1 id="I-am">{t("Jeg er")} <span className="orange">Arash</span></h1>
          <h3 id="developer" className="typewriter">
          {t("Passioneret")}<span className="orange"> {t("Frontend Udvikler")}</span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default Home;