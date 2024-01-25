import React, {useCallback, useEffect, useState} from 'react';
import { useDropzone } from 'react-dropzone';

function DropzoneComponent(props) {
    const { onFilesChange } = props;

    const onDrop = useCallback(acceptedFiles => {
        // console.log(acceptedFiles);
        setFiles(acceptedFiles);
        onFilesChange(acceptedFiles);
    }, [onFilesChange]);

    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
    } = useDropzone({
        onDrop
    });


    const [files, setFiles] = useState(acceptedFiles)

    useEffect(() => {
        console.log(acceptedFiles)
        console.log(typeof ([]))
        setFiles(acceptedFiles)
    }, [acceptedFiles]);

    const deleteImg = (filePath) => {
        const updatedFiles = files.filter((file) => file.path !== filePath);
        setFiles(updatedFiles);
        for (let i = 0; i < acceptedFiles.length; i++) {
            if (acceptedFiles[i].path === filePath) {
                acceptedFiles.splice(i, 1);
                break;
            }
        }
        onFilesChange(acceptedFiles);
    }

    return (
        <>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='dz-default dz-message'><span><i className='fa fa-cloud-upload'></i> Click here or drop images to upload</span></div>
            </div>
            {acceptedFiles.length > 0 && <aside className='dropzoneAside'>
                <h5>Files</h5>
                <ul>
                    {files.map((file) =>
                        <li key={file.path}>{file.path}
                            <button onClick={() => {deleteImg(file.path)}} name={file.path} className='closeBtn'>X</button>
                        </li>)}
                </ul>
            </aside>}
        </>
    )
}

export default DropzoneComponent;
