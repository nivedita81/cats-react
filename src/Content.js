import React, { useState, useEffect } from 'react'
import DeleteComponent from './DeleteComponent'
import Add from './Add'
import { Link } from 'react-router-dom'

const Content = () => {
    const [paws, setPaws] = useState([]);
    const [add, setAdd] = useState(false);

    const getAllPaws = async() => {
        const url = "http://localhost:5000/cats";
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data.data);
            setPaws(data.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() =>{
        getAllPaws()
    }, []);

    const addPaws = async(paw) => {
        // paw.id = paw.id + 1
        // setPaws([...paws, paw])
        // setAdd(false)
        const formData = new FormData();

        formData.append("file", paw.file);

        const url = "http://localhost:5000/cats";
        try {
            console.log('inside addpaws and /get')
            console.log(paw)
            await fetch(url, {
                                    "method":"POST",
                                    // "headers": {
                                    //     "content-type": "application/json"
                                    // },
                                    "body": formData
                                    // JSON.stringify({
                                    //     // id: paws.length+1,
                                    //     name: paw.name,
                                    //     age: paw.age,
                                    //     bio: paw.bio,
                                    //     file: paw.file
                                    // }) 
                                } )
                                .then(res => res.json())
                                .then(res => { 
                                    console.log(res)
                                    setPaws([...paws, paw])
                                    setAdd(false)
                                })
        } catch (error) {
            console.error(error)
        }
    }

    const deleteList = (id) => {
        setPaws(paws.filter((detail) => id !== detail.id))
    }

    return (
        <>
            <div className="addButton">
                {add ? (
                    <Add addPaws={addPaws} setAdd={setAdd} />
                ) : (
                    <button onClick={() => setAdd(true)}> Add new Paw</button>
                )}
            </div>
            <div className="pawsList">
                    {paws.map(pawsVal => (
                        <div className="paws" key={pawsVal.id} >
                            <div className="pawsContent">
                                <Link to={ `/cats/${pawsVal.id}` }>{pawsVal.name}</Link>
                                <p>{pawsVal.age}</p>
                                <p>{pawsVal.bio}</p>
                                <img src={pawsVal.file} alt='paw' />
                            </div>
                            <DeleteComponent deleteList={deleteList} pawsVal={pawsVal} />
                        </div>
                    ))}
            </div>
        </>
    )
}

export default Content