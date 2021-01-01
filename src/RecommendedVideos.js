import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                image="https://i.ytimg.com/vi/uD27CZEiuGk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4K2Cva9jQPnntHc-xO7vzUFa53g"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngAFkYK5AVn9PZLSUj4hJ5RH3MVlQ-XyLfY9shx=s176-c-k-c0x00ffffff-no-rj" 
                title= "How To Become a Full Stack Developer In 2020"
                channel="TiffInTech"
                views="20k views"
                timestamp="1 month ago"
                />
                <VideoCard
                image="https://i.ytimg.com/vi/WuHSBSLK3_A/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCZbeHfY6DaPox8ZLMTuTTJeXKVwQ"
                channelImage="https://yt3.ggpht.com/a-/AOh14GjjfNPSW4KbdP2YvDUSgIk8hAlbkqbR5qzo2A=s68-c-k-c0x00ffffff-no-rj-mo"
                title="Relaxing Fireplace Sounds - Burning Fireplace & Crackling Fire Sounds"
                channel="Cat Trumpet"
                views="5 mln views"
                timestamp="1 year ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/BZUwtfM-wtU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLARIkid0qMBkWZUjoTxD0FD9xhilQ"
                channelImage="https://yt3.ggpht.com/a-/AOh14GgW2HaUhYtn_HxZPsCOD5A-7mglrooM1cXEcA=s68-c-k-c0x00ffffff-no-rj-mo"
                title="$348 Kobe Beed in Osaka - Teppanyaki in Japan"
                channel="Aden Films"
                views="600k views"
                timestamp="1 month ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/5ZchgU9KLOc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKJfEfjBnNAvw7Dt8BnAKmtqGDgg"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gi3S0HyC_-aU_TVWmm5AUzn2xph_bqAxAC6vw=s68-c-k-c0x00ffffff-no-rj-mo"
                title="World's Sharpest Kitchen Knife! - (Razor Sharp!)"
                channel="Experimental Fun"
                views="11 mln views"
                timestamp="2 weeks ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/HL7DEkXV_60/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCAyQJtprAx7CHtIptBPk0kiT30ew"
                channelImage="https://yt3.ggpht.com/a-/AOh14GgxDPadJ9Tei5yQ_Fi6sSViEc4B0QRudEjyJA=s68-c-k-c0x00ffffff-no-rj-mo"
                title="The Year's Biggest Breakthroughs in Math and Computer Science"
                channel="Quanta magazine"
                views="360k views"
                timestamp="4 days ago"

                />
                <VideoCard 
                image="https://i.ytimg.com/vi/OXOIH0nrAEQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMovDZVywo2cEW_FybTVr7HHqNaw"
                channelImage="https://yt3.ggpht.com/a-/AOh14GikD2OtCO5A4wjTO1n96n8ulpyV4XpKnQOMXw=s68-c-k-c0x00ffffff-no-rj-mo"
                title="Central Park Tower 6k Drone"
                channel="the Dronalist"
                views="140k views"
                timestamp="1 month ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/6Iu5Me2L0Rs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCFGRTk57sVYUJdcGE1QmKu79EUYg"
                channelImage="https://yt3.ggpht.com/a-/AOh14GgAod1dKVZkEXNK9TYXc-SrWQt6kLLXETYEJg=s68-c-k-c0x00ffffff-no-rj-mo"
                title="What is Stoicism? A Basic Overview"
                channel="Practical Psychology"
                views="15k views"
                timestamp="6 days ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/t92YpHq2e2Q/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBUP000eiwusRxsFjQRXuTAs4bAMw"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhKEmrAg1ZA62CL72TZ7RwhiT7DRAj1h3F92w=s68-c-k-c0x00ffffff-no-rj-mo"
                title="Every Garry Tonon Fight In ONE Championship"
                channel="ONE Championship"
                views="124k views"
                timestamp="1 week ago"
                />
                <VideoCard
                image="https://i.ytimg.com/vi/uD27CZEiuGk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4K2Cva9jQPnntHc-xO7vzUFa53g"
                channelImage="https://yt3.ggpht.com/ytc/AAUvwngAFkYK5AVn9PZLSUj4hJ5RH3MVlQ-XyLfY9shx=s176-c-k-c0x00ffffff-no-rj" 
                title= "How To Become a Full Stack Developer In 2020"
                channel="TiffInTech"
                views="20k views"
                timestamp="1 month ago"
                />
                <VideoCard
                image="https://i.ytimg.com/vi/WuHSBSLK3_A/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCZbeHfY6DaPox8ZLMTuTTJeXKVwQ"
                channelImage="https://yt3.ggpht.com/a-/AOh14GjjfNPSW4KbdP2YvDUSgIk8hAlbkqbR5qzo2A=s68-c-k-c0x00ffffff-no-rj-mo"
                title="Relaxing Fireplace Sounds - Burning Fireplace & Crackling Fire Sounds"
                channel="Cat Trumpet"
                views="5 mln views"
                timestamp="1 year ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/BZUwtfM-wtU/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLARIkid0qMBkWZUjoTxD0FD9xhilQ"
                channelImage="https://yt3.ggpht.com/a-/AOh14GgW2HaUhYtn_HxZPsCOD5A-7mglrooM1cXEcA=s68-c-k-c0x00ffffff-no-rj-mo"
                title="$348 Kobe Beed in Osaka - Teppanyaki in Japan"
                channel="Aden Films"
                views="600k views"
                timestamp="1 month ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/5ZchgU9KLOc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKJfEfjBnNAvw7Dt8BnAKmtqGDgg"
                channelImage="https://yt3.ggpht.com/a-/AOh14Gi3S0HyC_-aU_TVWmm5AUzn2xph_bqAxAC6vw=s68-c-k-c0x00ffffff-no-rj-mo"
                title="World's Sharpest Kitchen Knife! - (Razor Sharp!)"
                channel="Experimental Fun"
                views="11 mln views"
                timestamp="2 weeks ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/HL7DEkXV_60/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCAyQJtprAx7CHtIptBPk0kiT30ew"
                channelImage="https://yt3.ggpht.com/a-/AOh14GgxDPadJ9Tei5yQ_Fi6sSViEc4B0QRudEjyJA=s68-c-k-c0x00ffffff-no-rj-mo"
                title="The Year's Biggest Breakthroughs in Math and Computer Science"
                channel="Quanta magazine"
                views="360k views"
                timestamp="4 days ago"

                />
                <VideoCard 
                image="https://i.ytimg.com/vi/OXOIH0nrAEQ/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAMovDZVywo2cEW_FybTVr7HHqNaw"
                channelImage="https://yt3.ggpht.com/a-/AOh14GikD2OtCO5A4wjTO1n96n8ulpyV4XpKnQOMXw=s68-c-k-c0x00ffffff-no-rj-mo"
                title="Central Park Tower 6k Drone"
                channel="the Dronalist"
                views="140k views"
                timestamp="1 month ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/6Iu5Me2L0Rs/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCFGRTk57sVYUJdcGE1QmKu79EUYg"
                channelImage="https://yt3.ggpht.com/a-/AOh14GgAod1dKVZkEXNK9TYXc-SrWQt6kLLXETYEJg=s68-c-k-c0x00ffffff-no-rj-mo"
                title="What is Stoicism? A Basic Overview"
                channel="Practical Psychology"
                views="15k views"
                timestamp="6 days ago"
                />
                <VideoCard 
                image="https://i.ytimg.com/vi/t92YpHq2e2Q/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBUP000eiwusRxsFjQRXuTAs4bAMw"
                channelImage="https://yt3.ggpht.com/a-/AOh14GhKEmrAg1ZA62CL72TZ7RwhiT7DRAj1h3F92w=s68-c-k-c0x00ffffff-no-rj-mo"
                title="Every Garry Tonon Fight In ONE Championship"
                channel="ONE Championship"
                views="124k views"
                timestamp="1 week ago"
                />
            </div>


        </div>
    )
}

export default RecommendedVideos
