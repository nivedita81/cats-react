import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EditForm from './EditForm';
import Detail from './Detail'

const EditDetail = () => {
    const {id} = useParams();

    let [details, setDetails] = useState({id: null, name: '', age: '', bio: ''})
    const [edit, setEdit] = useState(false)
    const [currentDetail, setCurrentDetail] = useState({id: null, name: '', age: '', bio: ''})

    const getPawDetail = async() => {
        const url = `http://localhost:5000/cats/${id}`;
        try {
            const res = await fetch(url)
            const data = await res.json()
            setDetails(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getPawDetail()
    }, []);

    const editList = (paw) => {
        setEdit(true)
        setCurrentDetail({id: paw.id, name: paw.name, age: paw.age, bio: paw.bio})
    }

    const updatePawDetails = async(paws) => {
        const url = `http://localhost:5000/cats/${id}`;
        try {
            await fetch(url, {
                                    "method":"PUT",
                                    "headers": {
                                        "content-type": "application/json"
                                    },
                                    "body": JSON.stringify({
                                        id: paws.id,
                                        name: paws.name,
                                        age: paws.age,
                                        bio: paws.bio
                                    }) 
                                } )
                                .then(res => res.json())
                                .then(res => { 
                                    console.log(res)
                                    setDetails(res)
                                })
        } catch (error) {
            console.error(error)
        }
    }

    const updateList = (updated) => {
        updatePawDetails(updated)
        setEdit(false)
    }

    const deleteList = (id) => {
        setDetails(details.filter((detail) => id !== detail.id))
      }
    
    return (
        <div className="editDetail">
            {edit ? (
                <EditForm setEdit={setEdit} updateList={updateList} currentDetail={currentDetail} />
            ) : (
                <Detail setEdit={setEdit} detail={details } deleteList={deleteList} editList={editList} setDetails={setDetails}/>
            )}
        </div>
    )
}

export default EditDetail