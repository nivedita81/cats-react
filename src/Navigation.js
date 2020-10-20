import React from 'react'

const Navigation = () => {
    const style = {listStyleType: 'None', float: 'right', fontSize: 'large', display: 'flex'}
    const inlineStyle = {display: "inline"}

    return (
        <div>
            <ul style={{style}} className="navBar">
                <li style={{inlineStyle}}><a href = '#'>Home</a></li>
                <li style={{inlineStyle}}><a href= '#'>About</a></li>
                <li style={{inlineStyle}}><a href= '#'>Sign Up</a></li>
                <li style={{inlineStyle}}><a href= '#'>Login</a></li>
            </ul>
        </div>
    )
}

export default Navigation