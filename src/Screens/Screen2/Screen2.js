import {Discription} from "../../Components/Screen2/Discription/Discription";
import FooterScreen2 from "../../Components/Screen2/FooterScreen2/FooterScreen2";
import {RecentWork} from "../../Components/Screen2/RecentWork/RecentWork";
import SlideWithScroll from "../../Components/Screen2/SliderWithScroll/SlideWithScroll";

export const Screen2 = () => {
    return (
        <div style={{
            height:"fit-content",
            backgroundColor:"white",
            position:"relative",
        }}>
            <Discription/>
            <RecentWork/>
            <SlideWithScroll/>
            <FooterScreen2/>
        </div>
    )
}
