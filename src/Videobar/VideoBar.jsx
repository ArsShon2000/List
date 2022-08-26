import React from "react";
import sample from "./video.mp4"
import styleVideo from "./VideoBar.module.css"

const VideoBar = (props) => {
    return(
        <div className={styleVideo.vid}>
            <video className="videoTag" > //autoPlay loop muted
                <source src={sample} type='video/mp4' />
            </video> 
            <div>
                <textarea>

                </textarea>
            </div>
        </div>
    )
}

export default VideoBar