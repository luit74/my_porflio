import { useState } from "react";
import { projectData } from "../data/data.js";

const MyProject = ({ handleClick }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [imgCurrentIndex, setImgCurrentIndex] = useState(0);

  const projData = projectData[currentProject];

  const prevSlide = () => {
    setImgCurrentIndex((prev) =>
      prev === 0 ? projData.image.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setImgCurrentIndex((prev) =>
      prev === projData.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? projectData.length - 1 : prev - 1
    );
    setImgCurrentIndex(0);
  };

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === projectData.length - 1 ? 0 : prev + 1
    );
    setImgCurrentIndex(0);
  };

  return (
    <div className="pp-one">
      <div style={{ margin: "1rem 0 0 0", alignItems: "end" }}>
        <button className="button-33" onClick={() => handleClick("mybio")}>
          Back to Bio
        </button>
      </div>

      <div className="project-grid-container">
        <div className="project-left">
          <h2
            style={{ color: "black", fontSize: "3rem" }}
            className="font-lobster"
          >
            {projData.title}
          </h2>
          <p style={{ fontSize: "1.2rem" , lineHeight:'2.1rem' , maxHeight: '22rem',
    overflow: 'scroll' }}>{projData.description}</p>
          <button className="button-89">
            <a
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
                fontWeight: "600",
              }}
              href={`https://${projData.netlifyLink}`}
              target="_blank"
            >
              Go To Project
            </a>
          </button>
        </div>

        <div className="project-right">
          <h2 className="font-bungee">OverView</h2>
          <div style={{display:'flex' , alignItems:'center' , marginRight:'10px'}}>
            <button className="arrow-button" onClick={nextSlide}>❮</button>
            <img
              className="project-img"
              src={projData.image[imgCurrentIndex]}
              alt={`Project ${currentProject + 1} - Slide ${
                imgCurrentIndex + 1
              }`}
            />
            
            <button className="arrow-button" onClick={prevSlide}>❯</button>
          </div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginTop:'19px',
              alignItems:'center'
            }}
          >
            <button className="arrow-button" onClick={prevSlide}>
              ❮
            </button>
            <button className="arrow-button" onClick={nextSlide}>
              ❯
            </button>
          </div> */}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems:'center',
          gap: "2rem",
          marginTop: "9px",
        }}
      >
        <button className="arrow-button" onClick={prevProject}> ❮ </button>
        <h2>Slide Projects</h2>
        <button className="arrow-button" onClick={nextProject}> ❯ </button>
      </div>
    </div>
  );
};

export default MyProject;
