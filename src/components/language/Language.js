import React, { useState, useEffect } from "react";
import "./Language.css";
import { LiaAngleDownSolid } from "react-icons/lia";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useMediaQuery } from "@mui/material";
const languages = [
  {
    code: "dk",
    flag: "/assets/dk_flag.png",
  },
  {
    code: "en",
    flag: "/assets/uk_flag.png",
  },
];

const Language = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedLang, setSelectedLang] = useState("");
  const isMobile = useMediaQuery("(max-width:640px)");
  const handleShowList = (e) => {
    setIsActive((current) => !current);
  };

  const handleSelectLanguage = (e) => {
    const img = e.target.src;
    console.log("selected", img);
    setSelectedLang(img);
  };

  useEffect(() => {
    const cookie = Cookies.get("i18next");
    if (cookie === "en") {
      setSelectedLang("/assets/uk_flag.png");
    } else {
      setSelectedLang("/assets/dk_flag.png");
    }
  }, [selectedLang]);

  return (
    <div className="dropdown" onClick={handleShowList}>
      {selectedLang && (
        <div className="dropdown-wrapper">
          <img src={selectedLang} className="selectedImg" alt="Selected language flag" />
        </div>
      )}
      {!isMobile && <LiaAngleDownSolid id="arrow" />}
      <div className={`list ${isActive ? "show" : ""}`} onClick={handleSelectLanguage}>
        {languages.map(({ code, flag }, index) => {
          if (flag !== selectedLang) {
            return (
              <a
                key={index}
                className="item"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  i18next.changeLanguage(code);
                }}
              >
                <img src={flag} alt="flag" />
              </a>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Language;
