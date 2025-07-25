import "../styles/porfolioOne.css";
import Header from "../utils/Header";
import LeftSide from "./LeftSide";

const PortfolioOne = ({ handleClick }) => {
  return (
    <div className="pp-one">
      <div className="pp-header">
        <Header />
      </div>
      <div className="pp-main-container">
        <LeftSide handleClick={handleClick} />
        <div
        className="img"
          style={{
            width: "40%",
            // height: '100%',
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            flexDirection:'column',
            position: 'relative'
          }}
        >
          <img
            style={{
              width: "100%",
              borderRadius: "39%",
            //   position: 'absolute',
              inset: '0',
              margin: 'auto'
              
            //   marginRight: "5rem",
            }}
            src={"/myImage.jpg"}
            alt=""
          />
        </div>

      </div>
      <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2.1rem",
              color: "black",
              margin: "3rem",
              textAlign:'end'
            }}
            className="font-comforta"
          >
            7002440551 , luitdu99@gmail.com
          </p>
    </div>
  );
};

export default PortfolioOne;
