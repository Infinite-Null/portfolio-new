import "./Right.css"
import Typewriter from 'typewriter-effect';

export const Right = () => {
    return (
        <div className={"Screen1RightPart"}>
            I am
            <Typewriter
                options={{
                    strings: ['Freelancer !', 'Application Developer !', "Web Developer !"],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}
