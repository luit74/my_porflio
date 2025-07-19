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
          style={{
            fontSize: "5rem",
            fontWeight: "600",
            fontFamily: "none",
          }}
        >
          Luit Dusad
        </p>
      </div>
      <p className="font-comforta">
        I’m a frontend developer with a love for clean code, responsive layouts,
        and the occasional late-night bug hunt (a.k.a. my version of a treasure
        hunt). Whether it's crafting pixel-perfect UI or battling that one div
        that just won’t center — I’m all in. I believe great user experiences
        start with great code… and a good sense of humor helps too.
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
              display:"flex",
              gap:'10px'
            }}
            href="https://www.linkedin.com/in/luit-dusad-75a4111b4/"
            target="_blank"
          >
            <div style={{fontSize:'1.2rem' , fontWeight:'bold'}}>LinkedIn</div>
            <img style={{ width: "23px" }} src="/linkedIn.svg" alt="" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
