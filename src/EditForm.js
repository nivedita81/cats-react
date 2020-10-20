import React, { useState } from 'react'

const EditForm = (props) => {
    const [editVal, setEditVal] = useState(props.currentDetail);

   const handleEdit = (event) => {
       event.preventDefault()
        const {name, value} = event.target
       setEditVal({...editVal, [name]: value })
       console.log('after editing',editVal)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('before sending ',editVal)
        props.updateList(editVal)
     }
    

    return (
        <form onSubmit={handleSubmit}>
            <div className='updateForm'>
                <label>Name</label>
                <input type="text" 
                name="name" 
                defaultValue={props.currentDetail.name}
                onChange={handleEdit} />
            <br/>
            <label>Age</label>
            <input type="text" 
                name="age" 
                defaultValue={props.currentDetail.age} 
                onChange={handleEdit} />
            <br/>
            <label>Bio</label>
            <input type="text" 
                name="bio" 
                defaultValue={props.currentDetail.bio} 
                onChange={handleEdit} />
            <br/>
            <button>Update</button>
            <button onClick={() => props.setEdit(false)}>Cancel</button>
        </div>
        </form>
    )
}

export default EditForm