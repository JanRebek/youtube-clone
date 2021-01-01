import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import VideoCardSearch from "./VideoCardSearch";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <VideoCardSearch 
            image="https://i.ytimg.com/vi/USB_X-U2zZs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBZZDHpsY9ktiI8u5fRsQWZqEhvxQ"
            title="Brazilian Jiu Jitsu Highlights"
            channel="Jakub Ceg"
            views="1,3 mln views"
            timestamp="5 years ago"
            channelImage="https://yt3.ggpht.com/a-/AOh14GgfpG0JCS9j5xoLVarDG1jX538ZSXMQ87mFAA=s68-c-k-c0x00ffffff-no-rj-mo"
            description="Brazilian jiu-jitsu is a martial art and combat sport, that focuses on grappin and especially ground ... "
            />
            <VideoCardSearch />
            <VideoCardSearch />
            <VideoCardSearch />
            <VideoCardSearch />
            <VideoCardSearch />
            <VideoCardSearch />

        </div>
    )
}

export default SearchPage
