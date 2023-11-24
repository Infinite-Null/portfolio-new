import "./RecentWork.css"
export const RecentWork = () => {
    const Works = [
        {
            name:"Out Of Kind",
            image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg",
            scope:"Full Stack"
        },
        {
            name:"Wallpaper",
            image:"https://imgv3.fotor.com/images/blog-richtext-image/walli-wallpaper-app.png",
            scope:"Application"
        },
        {
            name:"Weather",
            image:"https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg",
            scope:"Application"
        },
    ]
    return (
        <div style={{
            width:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column"
        }}>
            <div className={"TitleScreen2Work"}>
                    Recent
            </div>
            {Works.map((e,i)=><EachWorkComponent name={e.name} image={e.image} scope={e.scope} key={i}/>)}
        </div>
    )
}
function EachWorkComponent({name,scope,image}){
    return<div className={"Screen2EachWorkComponent"}>
        <h1>{name}</h1>
        <p>{scope}</p>
        <img alt={"img"} src={image}/>
    </div>
}
