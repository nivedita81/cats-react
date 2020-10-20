import React, {useState} from 'react'
import FileUploader from './FileUploader'
// import axios from 'axios'

export default function FileUpload() {

    //const [imageURL, setImageURL] = useState('');
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    

    // const handleUploadImage = (e) => {
    //     e.preventDefault();
    //     const data = new FormData();
    //     data.append('file', uploadInput.files[0]);
    //     data.append('filename', fileName.value);
    //     fetch('http://localhost:8000/upload', {
    //     method: 'POST',
    //     body: data,
    //     }).then((response) => {
    //     response.json().then((body) => {
    //         setImageURL({ imageURL: `http://localhost:8000/${body.file}` });
    //     });
    //     });
    // }

    const submitForm = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", selectedFile);
      
        // axios
        //   .post('http://localhost:5000/upload', formData)
        //   .then((res) => {
        //     alert("File Upload success");
        //   })
        //   .catch((err) => alert("File Upload Error"));
      };

    return (
        <div className="form">
            <form>
                <div>
                    <input type="text" 
                        placeholder="Enter the desired name of file"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />               
                </div>
                <FileUploader
                        onFileSelectSuccess={(file) => setSelectedFile(file)}
                        onFileSelectError={({ error }) => alert(error)} />

                <button onClick={submitForm}>Submit</button>
                {/* <br />
                <div>
                <button>Upload</button>
                </div>
                <img src={imageURL} alt="img" /> */}
            </form>
        </div>
    )
}
