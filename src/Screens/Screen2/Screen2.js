import {Discription} from "../../Components/Screen2/Discription/Discription";
import {RecentWork} from "../../Components/Screen2/RecentWork/RecentWork";

export const Screen2 = () => {
    return (
        <div style={{
            height:"fit-content",
            backgroundColor:"white",
            position:"relative"
        }}>
            <Discription/>
            <RecentWork/>
        </div>
    )
}
