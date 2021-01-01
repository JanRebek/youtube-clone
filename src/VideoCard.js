import React from 'react';
import "./VideoCard.css";
import { Avatar } from '@material-ui/core';

function VideoCard({ image, title, channel, views, timestamp, channelImage  }) {
    return (
        <div className="VideoCard__video">
            <img 
            className="VideoCard__thumbnail"
            src={image}
            alt=""
            ></img>
            <div className="VideoCard__bottom">
            <Avatar
                alt=""
                src={channelImage}
            />
                <div className="VideoCard__text">
                    <div className="VideoCard__title">
                        <h4>{title}</h4>
                        <p>{channel}</p>
                    </div>
                    <div className="VideoCard__info">
                        <div className="VideoCard__views">
                            {views} ·  
                        </div>
                        <div className="VideoCard__timestamp">
                            {timestamp}
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default VideoCard
