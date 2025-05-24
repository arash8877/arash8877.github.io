import "./Skills.css";
import Progressbar from "../progressbar/Progressbar";
import { useTranslation } from "react-i18next";

const Skills = () => {
  // const [progressing, setProgressing] = useState(0)
  // useEffect(() => {
  //   const id = setInterval(() => {
  //      setProgressing(Math.random()*100)
  //   }, 3000);
  //   return () => {clearInterval(id)};

  // }, [])

  const { t } = useTranslation();

  return (
    <>
      <section id="skills" className="skills wrapper">
        <div className="section-gap"></div>
        <h2 className="section-title">{t("Kompetencer")}</h2>
        <Progressbar />
      </section>
    </>
  );
};

export default Skills;
