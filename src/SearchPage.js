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
            <VideoCardSearch 
            image="https://i.ytimg.com/vi/ZM_8-c1EqOY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA1cibRCkZQesjSG8aKr6fPoGSEAA"
            title="Intro to Brazilian Jiu-Jitsu: Part 2 -- The Basics"
            channel="Art of Manliness"
            views="4,2 mln views"
            timestamp="6 years ago"
            channelImage="https://yt3.ggpht.com/a-/AOh14Gibgzi24Huc0stzYrk3fAhOcoae7o8FUgincA=s68-c-k-c0x00ffffff-no-rj-mo"
            description="This is the first in a series of videos about Brazilian jiu-jitsu. In this video, third generation Brazilian Jiu- "            
            />
            <VideoCardSearch 
            image="https://i.ytimg.com/vi/98gMJwqDRKg/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDiBDT2MJ2ru5UoknqzmXshL6Hzrw"
            title="White Belt Tournament FULL MATCHES Jiu Jitsu IBJJF"
            channel="Caleb Kim"
            views="22k views"
            timestamp="3 months ago"
            channelImage="https://yt3.ggpht.com/a-/AOh14GjFIjGb6kX9AWtUg8ixdGfFng3DcPeNn3WzTw=s68-c-k-c0x00ffffff-no-rj-mo"
            description="Thank you for your support in my jiu jitsu journey! Because there were so much positive feedback from the"            
            />
            <VideoCardSearch 
            image="https://i.ytimg.com/vi/gGTjSyo2JKI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDlgDC9sKVCQPmrHf2Qu4IYgzt8zg"
            title="BJJ vs. Boxing MMA-Streetfight DFC"
            channel="DEFEND Fight Club"
            views="283k views"
            timestamp="1 month ago"
            channelImage="https://yt3.ggpht.com/a-/AOh14GhcmPnD5SpdCX49V0sfFz_8IgILu7EJ8s94qg=s68-c-k-c0x00ffffff-no-rj-mo"
            description="BJJ vs. Boxer -- MMA-rules FULL FIGHT JETZT KANALMITGLIED WERDEN UND UNS SUPPORTED:... "
            />
            <VideoCardSearch 
            image="https://i.ytimg.com/vi/mcP-qt-PxkE/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA18Z64Z0Suxk94Yr0lUdqD9B2q6g"
            title="Bjj Black Belt taps out Agressive Purple Belt"
            channel="Jedi Goes Jiujitsu"
            views="46k views"
            timestamp="6 days ago"
            channelImage="https://yt3.ggpht.com/a-/AOh14GgdGDQ7ZWafgkESS9ljN0iMUO8LaJcgHGxPKg=s68-c-k-c0x00ffffff-no-rj-mo"
            description="In today's BJJ play-by-view we have a bjj black belt taking on me (purple belt) Comment which round you liked"
            />

        </div>
    )
}

export default SearchPage
