import React from "react";
import sample from "./video.mp4"
import styleVideo from "./VideoBar.module.css"

const VideoBar = (props) => {
    return(
        <div className={styleVideo.vid}>
            <video className="videoTag" autoPlay loop muted> //
                <source src="rtsp://admin:Gfhjkm123@192.168.88.15:554//mjpeg/ch1/sub/av_stream" type='video/mp4' />
            </video> 
            <div></div>
            <div></div>
        </div>
        
    )
}

export default VideoBar