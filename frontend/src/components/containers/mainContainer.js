import React from 'react'
import HeroWrapper from  './heroWrapper'
import StoryWrapper from './storyWrapper'

class MainContainer extends React.Component {
    render(){
        return (
            <React.Fragment>
                <HeroWrapper />
                <StoryWrapper />
            </React.Fragment>
        )
    }
}

export default MainContainer;