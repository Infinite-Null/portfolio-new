import {Discription} from "../../Components/Screen2/Discription/Discription";
import {RecentWork} from "../../Components/Screen2/RecentWork/RecentWork";
import SlideWithScroll from "../../Components/Screen2/SliderWithScroll/SlideWithScroll";

export const Screen2 = () => {
    return (
        <div style={{
            height:"fit-content",
            backgroundColor:"white",
            position:"relative"
        }}>
            <Discription/>
            <RecentWork/>
            <SlideWithScroll/>
        </div>
    )
}
