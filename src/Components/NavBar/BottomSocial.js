import { Social } from "../../Links/SocialMedia"

export const BottomSocial = () => {
    const anchorStyle={
        color:"white",
        textDecoration:"none"
    }
    return (
        <div style={{
            position:"absolute",
            bottom:0,
            color:"gray",
            width:"80%",
            marginLeft:"20px",
            padding:"20px"
        }}>
            Social
            <div style={{
                display:"flex",
                gap:"20px",
                marginTop:"20px",
                marginBottom:"10px",
            }}>
                <a style={anchorStyle}  target={"_blank"} href={Social.Github} rel="noreferrer">Github</a>
                <a style={anchorStyle}  target={"_blank"} rel="noreferrer" href={Social.Instagram}>Instagram</a>
                <a style={anchorStyle } target={"_blank"} rel="noreferrer" href={Social.Linkedin}>LinkedIn</a>
            </div>
        </div>
    )
}
