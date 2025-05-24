import React from "react";
import "./Projects.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects wrapper">
      <div className="section-gap"></div>
      <h2 className="section-title">{t("Projekter")}</h2>
      <div className="projects-wrapper">
        <div className="project">
          <h4>Custom Gemini AI</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img className="image-of-project" src="/assets/gemini.png" alt="todo-list" />
            <div className="image-overlay">
              <p className="image-description">React</p>
              <p className="image-description">CSS</p>
              <a className="anchor" href="https://arashgemini.onrender.com/" target="blank"></a>
            </div>
          </div>
        </div>

        <div className="project">
          <h4>Online Shop</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img className="image-of-project" src="/assets/shopping-site.png" alt="shopping-site" />
            <div className="image-overlay">
              <p className="image-description">React</p>
              <p className="image-description">CSS</p>
              <a
                className="anchor"
                href="https://online-shop-gw9o.onrender.com/"
                target="blank"
              ></a>
            </div>
          </div>
        </div>

        <div className="project">
          <h4>Movie Collection</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img
              className="image-of-project"
              src="/assets/movie-collection.png"
              alt="shopping-site"
            />
            <div className="image-overlay">
              <p className="image-description">Next.js</p>
              <p className="image-description">Tailwind</p>
              <a
                className="anchor"
                href="https://movie-collection-b1uz.onrender.com/"
                target="blank"
              ></a>
            </div>
          </div>
        </div>
        <div className="project">
          <h4>Landing Page</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img className="image-of-project" src="/assets/landing-page.png" alt="landing-page" />
            <div className="image-overlay">
              <p className="image-description">React</p>
              <p className="image-description">aos animation</p>
              <a
                className="anchor"
                href="https://landing-page-c4je.onrender.com/"
                target="blank"
              ></a>
            </div>
          </div>
        </div>
        <div className="project">
          <h4>Shopping Cart</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img
              className="image-of-project"
              src="/assets/shopping-cart-context.png"
              alt="shopping-cart"
            />
            <div className="image-overlay">
              <p className="image-description">React</p>
              <p className="image-description">Context API</p>
              <a
                className="anchor"
                href="https://shopify-with-react-context.onrender.com/"
                target="blank"
              ></a>
            </div>
          </div>
        </div>
        <div className="project">
          <h4>Filtering Products</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img
              className="image-of-project"
              src="/assets/filtering-products.png"
              alt="filtering-projects"
            />
            <div className="image-overlay">
              <p className="image-description">React</p>
              <p className="image-description">CSS</p>
              <a
                className="anchor"
                href="https://filtering-products.onrender.com/"
                target="blank"
              ></a>
            </div>
          </div>
        </div>
        <div className="project">
          <h4>Social Network</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img
              className="image-of-project"
              src="/assets/social-network.png"
              alt="social-network"
            />
            <div className="image-overlay">
              <p className="image-description">Material UI</p>
              <p className="image-description">React</p>
              <a
                className="anchor"
                href="https://social-network-ui.onrender.com/"
                target="blank"
              ></a>
            </div>
          </div>
        </div>
        <div className="project">
          <h4>Task Manager</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img className="image-of-project" src="/assets/task-manager.png" alt="task-manager" />
            <div className="image-overlay">
              <p className="image-description">TypeScript</p>
              <p className="image-description">Node.js</p>
              <p className="image-description">Zustand</p>
              <a
                className="anchor"
                href="https://github.com/HackYourFuture-CPH/class-25-lothbrok"
                target="blank"
              ></a>
            </div>
          </div>
        </div>
        <div className="project">
          <h4>Dark Mode</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img className="image-of-project" src="/assets/dark-mode.png" alt="dark-mode" />
            <div className="image-overlay">
              <p className="image-description">React</p>
              <p className="image-description">CSS</p>
              <a className="anchor" href="https://darkmode-kldn.onrender.com/" target="blank"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

{
  /* <div className="project">
          <h4>Book Library</h4>
          <div className="line"></div>
          <div className="image-wrapper">
            <img
              className="image-of-project"
              src="/assets/book-library.png"
              alt="book-library"
            />
            <div className="image-overlay">
              <p className="image-description">react</p>
              <p className="image-description">css</p>
              <a className="anchor" href="https://booki-list.onrender.com/" target="blank"></a>
            </div>
          </div>
        </div> */
}
