import React, {useRef} from 'react'

export default function FileUploader({onFileSelect}) {
        const fileInput = useRef(null);
        const handleFileInput = (e) => {
            onFileSelect(e.target.files[0])
        }
    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary" />
        </div>
    )
}
