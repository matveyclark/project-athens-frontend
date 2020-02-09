import React from 'react'
import Button from '../button'

export default class HeroWrapper extends React.Component {
    render() {
        return(
            <div className="wrapper hero-container">
                <h1 className="hero-title">Join the <br></br>movement.</h1>
                <div className="hero-left">
                    <Button class={"btn story-btn"} link={"#story"} content={"Our Story"} />
                </div>
                <div className="hero-right">
                    <Button class={"btn buy-btn"} link={"/product"} content={"Buy"} />
                </div>
            </div>
        )
    }
}