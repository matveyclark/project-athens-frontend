import React from 'react'
import Button from '../buttonComponent'

export default class HeroWrapper extends React.Component {
    render() {
        return(
            <div className="wrapper hero-container">
                <h1 className="hero-title">Join the movement!</h1>
                <div className="btns">
                    <Button link={"#story"} content={"Our Story"} />
                    <Button content={"Buy"} />
                </div>
            </div>
        )
    }
}