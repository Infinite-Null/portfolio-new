import "./Left.css"
import Earth from "../../assets/earth.gif"
export const Left = () => {
    return (
        <div className={"Screen1LeftPart"}>
            <p>Located <br/> in the <br/> India</p>
           <div style={{
               padding:"0px",
               margin:"10px",
               borderRadius:"100%",
               boxShadow:"2px 2px 50px rgba(0,0,0,1)"
           }}>
               <img src={Earth} style={{
                   height:85,
                   width:100
               }}/>
           </div>
        </div>
    )
}
