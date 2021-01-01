import { Avatar } from '@material-ui/core';
import React from 'react';
import "./VideoCardSearch.css";

function VideoCardSearch({ image, title, channel, views, timestamp, channelImage, description  }) {
    return (
        <div className="videoCardSearch">
            <div className="videoCardSearch__video">
                <img className="videoCardSearch__thumbnail"
                src={image} 
                alt=""
                />
            </div>
            <div className="videoCardSearch__side">
                <div className="videoCardSearch__title">
                    <h3>{title}</h3>
                </div>
                <div className="videoCardSearch__info">
                    <div className="videoCardSearch__views">
                        <h4>{views} ·&nbsp; </h4>
                    </div>
                    <div className="videoCardSearch__timestamp">
                        <h4> {timestamp}</h4>
                    </div>
                </div>
                <div className="videoCardSearch__channelInfo">
                    <Avatar className="videoCardSearch__avatar"
                    src={channelImage}
                    alt=""
                    />
                    <div className="videoCardSearch__channelName">
                        <h4>{channel}</h4>
                    </div>
                </div>
                <div className="videoCardSearch__description">
                    <h4>{description}</h4>
                </div>
            </div>
            
        </div>
    )
}

export default VideoCardSearch;
