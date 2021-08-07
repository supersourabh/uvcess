import React from 'react'

export default function MainScreenTags() {
    const welcome = {
        fontSize: "85px",
        color: "#d9d4da"
    }
    const brand = {
        fontSize: "120px",
        color: "#86f986"
    }
    const ss = {
        fontSize: "30px",
        color: "#86f986"

    }
    const quote = {
        fontSize: "30px",
        color: "#a1d4c8",
        textIndex : 20

    }




    return (
        <div className="tags" style={ { width: 768, height: 500, paddingTop : 100 } }>

            <b style={ welcome }>Welcome to</b>
            <strong style={ brand } onClick={ (e) => window.open("https://uvce.ac.in") }>UVCE</strong>
            <b style={ ss }>Study-Support</b>

            <p style={ quote }>
                Learn more ,grow more with the help of our material .
            </p>


        </div>
    )
}
