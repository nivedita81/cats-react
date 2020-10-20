import React, {useState, useRef} from 'react'
// import FileUpload from './FileUpload'

const Add = (props) => {
    const initialValue = {id: null, name: '', age: '', bio: '', file: ''}
    const [addValue, setAddValue] = useState(initialValue);
    const inputRef = useRef();
    // const [fileName, setFileName] = useState('');
    const [imageFile, setImageFile] = useState(null);
    // const [imageURL, setImageURL] = useState('');

    const handleInput = (event) => {
        const {name, value} = event.target
        setAddValue({...addValue, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!addValue.name || !addValue.age || !addValue.bio) 
            return
        addValue.file = imageFile;
        console.log('hiiiii ',imageFile);
        props.addPaws(addValue)
        setAddValue(initialValue)
    }

    // const handleUploadImage = (event) => {
    //     event.preventDefault();
    
    //     const data = new FormData();
    //     data.append('file', imageFile);
    //     data.append('filename', event.target.value);
    
    //     fetch('http://localhost:8000/upload', {
    //       method: 'POST',
    //       body: data,
    //     }).then((response) => {
    //       response.json().then((body) => {
    //         // setImageURL(`http://localhost:8000/${body.fileName}`);
    //       });
    //     });
    // }

    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>Name</label>
                <input type="text" 
                    name="name" 
                    value={addValue.name} 
                    onChange={handleInput} />
                <br />
                <label>Age</label>
                <input type="text" 
                    name="age" 
                    value={addValue.age} 
                    onChange={handleInput} />
                <br />
                <label>BioData</label>
                <input type="text" 
                    name="bio" 
                    value={addValue.bio} 
                    onChange={handleInput} />
                <br />
                {/* <label>File Upload</label> */}
                {/* <FileUpload /> */}
                {/* <input type="text" 
                        placeholder="Enter the desired name of file"
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)} />
                <br /> */}
                <input type="file"
                        name="file"
                        onChange={() => setImageFile(inputRef.current.files[0])}
                        ref={inputRef} />
                <br />
                {/* <img src={imageURL} alt='image' /> */}
                <button>Add new paw</button>
            </form>
        </div>
    )
}

export default Add