import React from 'react'
function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card_img">
                    <img src={props.imgsrc} alt="IMG" />
                </div>
                <div className="card_info">
                    <h2 className="card_name">{props.sname}</h2>
                    <span className="card_title">{props.title} </span>
                </div>
                <div className="card_link">
                    <a href={props.link} target="_blank" rel="noreferrer" >
                        <button className="btn">Click Here</button>
                    </a>
                </div>

            </div>
        </>
    )
}

export default Card;