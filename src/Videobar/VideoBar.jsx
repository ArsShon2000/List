import React, { useEffect, useState } from "react";
import sample from "./video.mp4"
import styleVideo from "./VideoBar.module.css"
import car from "./img_2.jpg"

const VideoBar = (props) => {


    
    // const [seconds, setSeconds] = useState(0);

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setSeconds(seconds => seconds + 1);
    //   }, 42);
    //   return () => clearInterval(interval);
    // }, []);

    // const car = '../img_2.jpg'
    console.log(car)
    
    


    return(
        <div className={styleVideo.vid}>
            {/* {seconds} seconds have elapsed since mounting. */}
            <img className="videoTag" src="img_1.jpg" alt="car" />

            {/* <video className="videoTag" autoPlay loop muted> //
                <source src="rtsp://admin:Gfhjkm123@192.168.88.15:554//mjpeg/ch1/sub/av_stream" type='video/mp4' />
            </video>  */}
            <div></div>
            <div></div>
        </div>
        
    )
}

export default VideoBar