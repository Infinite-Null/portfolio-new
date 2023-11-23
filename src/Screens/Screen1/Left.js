import "./Left.css"
import Earth from "../../assets/earth.gif"
export const Left = () => {
    return (
        <div className={"Screen1LeftPart"}>
            <p>Located <br/> in the <br/> India</p>
               <img src={Earth} alt={"n"} style={{
                   height:105,
               }}/>
        </div>
    )
}
