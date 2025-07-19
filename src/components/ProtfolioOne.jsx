import "../styles/porfolioOne.css"
import Header from "../utils/Header";
import LeftSide from "./LeftSide";


const PortfolioOne = ({handleClick}) =>{
    return(
        <div className="pp-one">
            <div className="pp-header">
                <Header />
            </div>
            <div className="pp-main-container">
                <LeftSide handleClick={handleClick} />
                <div style={{
                    width:"100%",
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <img style={{
                        width:'21.2rem',
                        borderRadius: '39%',
                        marginRight: '5rem'
                    }} src={'/myImage.jpg'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioOne;