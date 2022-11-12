import React from 'react'
import Card from './Card';
import Sdata from './Sdata'
function Cards() {
    return (
        <>
            <div className="cards">
                {
                    Sdata.map((value,index)=>{
                        return(
                            <Card key={index} imgsrc={value.imgsrc} title={value.title} sname={value.sname} link={value.link} />
                        );
                    })
                }
            </div>
        </>
    )
}

export default Cards;