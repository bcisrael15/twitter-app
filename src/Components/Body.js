import React, {useState} from 'react'; 
import Tweet from "./Tweet.js"
import jack from "../jack.jpg"

import "../Styles/Body.css"

const Body = () => {
    const [profile, setProfile]=useState("");
    const [content, setContent]=useState("");
    const [posts, setPosts] = useState([]);
    
    const submitPost = () => {
        setPosts([...posts, {profile:profile, content:content}])
        setProfile("")
        setContent("")
    }

    return (
        <div id="contain">
            <input id="profile" value={profile} onChange={e => setProfile(e.target.value)} placeholder="Twitter Handle"/>
            <input id="text" value={content} onChange={e => setContent(e.target.value)} placeholder="Tweet Content"/>
            <button id="sub" onClick={submitPost}>Tweet</button>
            <br></br>
            {posts.map((post) => (
                <div id="tweets">
                    <Tweet profile={post.profile} photo={jack} content={post.content}/>
                    <br></br>
                </div>
            ))}
        </div>
    )
}

export default Body; 