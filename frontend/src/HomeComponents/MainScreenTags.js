import React from 'react'

export default function MainScreenTags() {
    const welcome = {
        fontSize: "85px",
        color : "#d9d4da"
    }
    const brand = {
        fontSize: "120px",
        color:"#86f986"
    }
    const ss = {
        fontSize: "30px",
        color:"#86f986"
        
    }
   



    return (
        <div className="tags" style={{width: 768 ,height:500}}>

            <b style={ welcome }>WelCome to</b>
            <strong style={ brand } onClick={ (e) => window.open("https://uvce.ac.in") }>UVCE</strong>
            <b style={ ss }>Study-Support</b>

        </div>
    )
}
