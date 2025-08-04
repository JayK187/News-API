import React from 'react';

export default function newsitems() {

const Newsitems = ({ title, description, imageUrl, url }) => {
    return (
        <div>
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-3 px-3" style={{ width: "345px" }}>
                <img src={imageUrl} className="card-img-top" alt="news" style={{height:"200px", width:"300px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
            </div>
        </div>
    );
};

}
