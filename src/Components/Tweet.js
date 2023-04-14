import React, {useState} from 'react';
import "../Styles/Tweet.css";


//need input for profile, date, tweet-content, etc
//Use map to render them on page

const Tweet = (props) => {
    const [likes, setLikes]=useState(0);
    var d = new Date()
    var month = d.getMonth()+1
    var year = d.getFullYear()
    var day = d.getDate()

    let removeLike=()=>{
        if (likes>0) {
            setLikes(likes-1);
        }
    }

    return (

        <div id="container">
            <div id="profBar">
                <img id="photo" src={props.photo}></img>
                <b id="profile">{props.profile}</b> 
            </div>
            <b id="text">{props.content}</b>
            <div id="bottomBar">
                <p id="date">{month}/{day}/{year}</p> 
                <p>4 retweets</p>
                <div id="likes">
                    <p>{likes} likes</p>
                </div>
                </div>
                <div>
                <button onClick={() => setLikes(likes+1)}>Like</button>
                <button onClick={removeLike}>Unlike</button>
                </div>
        </div>
    )
}

export default Tweet;