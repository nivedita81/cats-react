import React from 'react'

export default function DeleteComponent(props) {

    const deleteClick = () => {
        props.deleteList(props.pawsVal.id)
    }
    return (
        <div>
            <button type="button" onClick={deleteClick}>Delete</button>
        </div>
    )
}
