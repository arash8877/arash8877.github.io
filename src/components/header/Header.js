import React, { useState, useEffect } from "react";
import './Header.css';
import { FaBars, FaTimes } from "react-icons/fa";
import Language from "../language/Language";
import {useMediaQuery} from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showList, setShowList] = useState(false)
  const isMobile = useMediaQuery("(max-width:640px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const { t } = useTranslation();

  const handCloseMenu = () => {setShowList(false)};


  return (
    <header id="home">
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`} id="navbar">
        <div className={`nav-child wrapper ${isScrolled ? "nav-child-scrolled" : ""}`} id="nav-child">
          <div id="logo">
              <a href="#home" className="logo-name">ARASH</a>
          </div>
          <div className="burger-lang-container">
          { isMobile && <Language />}
            <div className={`${showList ? 'nav-links active' : 'nav-links'}`}>
            <ul className="ul">
              <li><a href="#about" onClick={handCloseMenu}>{t("Om mig")}</a></li>
              <li><a href="#projects" onClick={handCloseMenu}>{t("Projekter")}</a></li>
              <li><a href="#skills" onClick={handCloseMenu}>{t("Kompetencer")}</a></li>
              <li><a href="#contact" onClick={handCloseMenu}>{t("Kontakt")}</a></li>
            {!isMobile && <Language />}
            </ul>
            </div>
          
          <div className="nav-mobile">
           <button onClick={() => setShowList(!showList)} className="burger-btn">
             {showList? <FaTimes className='nav-toggle'/> : <FaBars className='nav-toggle'/>}
           </button>
         </div>
         </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
