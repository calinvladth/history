import React from 'react'
import './index.sass'

const Track = ({handleClick, components, active}) => {

    const index = parseInt(components.indexOf(active)) < 0 ? 0 : parseInt(components.indexOf(active))
    const next = () => {
        handleClick(components[index + 1])
    }

    const previous = () => {
        handleClick(components[index - 1])
    }

    const width = () => {
        const percent = 100 / components.length
        const position = percent * index
        return {
            width: `${percent}%`,
            left: `${position}%`
        }
    }

    // const borderColor = () => {
    //     if (active === 'home' || active === 'about' || active === 'services' || active === 'contact') {
    //         return {
    //             borderColor: 'white',
    //         }
    //     }
    //     if (active === 'portfolio') {
    //         return {
    //             borderColor: 'black',
    //         }
    //     }
    // }

    // const barColor = () => {
    //     if (active === 'home' || active === 'about' || active === 'services' || active === 'contact') {
    //         return {
    //             backgroundColor: 'white'
    //         }
    //     }
    //     if (active === 'portfolio') {
    //         return {
    //             backgroundColor: 'black'
    //         }
    //     }
    // }

    const leftArrow = () => {
        if (index !== 0) {
            return (
                <span
                    className="arrow arrow__left"
                    onClick={() => previous()}></span>
            )
        }
    }

    const rightArrow = () => {
        if (index !== components.length - 1) {
            return (
                <span
                    className="arrow arrow__right"
                    onClick={() => next()}></span>
            )
        }
    }


    return (
        <div className="trackBox">
            {leftArrow()}
            <span className="bar">
                <span className="bar__active" style={width()}></span>
            </span>
            {rightArrow()}
        </div>
    )
}

export default Track
