const LeftSide = ({ handleClick }) => {
  return (
    <div className="pp-left-card">
      <h1 className="font-bungee" style={{ color: "black", fontWeight: "900" }}>
        Frontend Developer
      </h1>
      <div className="pp-name-heading">
        <p className="font-lobster" style={{ fontSize: "3.2rem" }}>
          Hello , my name is
        </p>
        <p
        className="p-style"
          style={{
            fontSize: "5rem",
            fontWeight: "600",
            fontFamily: "none",
          }}
        >
          Luit Dusad
        </p>
      </div>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "2.1rem",
          maxHeight: "18rem",
          overflow: "scroll",
        }}
        className="font-comforta"
      >
        Frontend Developer with experience more than <b style={{color:'red' , fontSize:'larger'}} >1 year</b> ,  skilled in HTML, CSS, JavaScript, React.js, and
        Next.js. Experienced in building responsive and user-friendly web
        applications, integrating APIs, and creating pixel-perfect UIs.
        Proficient in Git-based team collaboration, debugging, and delivering
        performance-optimized solutions.
      </p>
      
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <button onClick={() => handleClick("projects")} className="button-92">
          My Projects
        </button>
        <button className="button-55">
          <a
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              gap: "10px",
            }}
            href="https://www.linkedin.com/in/luit-dusad-75a4111b4/"
            target="_blank"
          >
            <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              LinkedIn
            </div>
            <img style={{ width: "23px" }} src="/linkedIn.svg" alt="" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
