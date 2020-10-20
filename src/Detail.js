import React from 'react'

export default function Detail(props) {

    const {detail} = props

    return (
        <div className='detail'>
            <h4>Name</h4>
            <p>{detail.name}</p>
            <h4>Age</h4>
            <p>{detail.age}</p>
            <h4>Bio</h4>
            <p>{detail.bio}</p>
            <button type="button" onClick={() => props.editList(detail)}>Edit</button>
            <button type="button" onClick={() => props.setDetails(detail)}>Go Back</button>
            
        </div>
    )
}
