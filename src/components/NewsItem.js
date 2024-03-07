import React from 'react'
import mic from "./speak.png.png"

const NewsItem = (props) => {

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }

    let { title, description, imgUrl, url, publishedAt, author, source } = props;

    return (
        <div>
            <div className="card mb-5" id="myCardBody">
                <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right : 0 }} >
                     <span className="badge rounded-pill " style={{backgroundColor : 'rgba(247, 23, 170, 0.84)'}} >{source}</span>
                </div>
           
                <img src={imgUrl ? imgUrl : "https://img.com"} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{title ? title : "Not Definde by Publisher"}...<span className="badge bg-success">New</span></h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">by {!author ? "unkown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a rel="noreferrer" href={url} className="btn btn-sm btn-dark">Read More</a>
                    <img className="position-absolute" onClick={() => speak(title)} style={{ height: '6%', left: '88%', cursor: 'pointer' }} src={mic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NewsItem

