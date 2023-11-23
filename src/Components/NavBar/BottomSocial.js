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
                <a style={anchorStyle}  target={"_blank"} href={"https://github.com/Infinite-Null"}>Github</a>
                <a style={anchorStyle}  target={"_blank"}>Instagram</a>
                <a style={anchorStyle } target={"_blank"} href={"https://in.linkedin.com/in/ankit-kum-shah"}>LinkedIn</a>
            </div>
        </div>
    )
}
