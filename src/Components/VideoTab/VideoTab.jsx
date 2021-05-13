import React from 'react'
import './VideoTab.css'
import Video from './Assets/KHacksVID.mp4'

function VideoTab(props) {
    return (
        <section className="mar-top-bot-50">
            <div className="video-container">
                <video className="Video-box" src={Video} type="video/mp4" muted="true" loop="true" autoplay="true"></video>
            </div>
        </section>
    );
}

export default VideoTab;