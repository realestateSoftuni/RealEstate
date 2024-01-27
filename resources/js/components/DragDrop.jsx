import React, {useCallback, useEffect, useState} from 'react';
import { useDropzone } from 'react-dropzone';

function DropzoneComponent(props) {
    const { onFilesChange, fileType } = props;

    const onDrop = useCallback((acceptedFiles, fileRejections) => {
        setFiles(acceptedFiles);
        onFilesChange(acceptedFiles, fileType);
    }, [onFilesChange]);

    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        fileRejections,
    } = useDropzone({
        onDrop,
        accept: props.fileMimes,
        maxFiles:props.fileNumber,
    });

    const fileRejectionItems = fileRejections.map(({ file, errors  }) => {
        return (
            <li key={file.path}>
                {file.path} - {file.size} bytes
                <ul>
                    {errors.map(e => <li key={e.code}>{e.message}</li>)}
                </ul>
            </li>
        )
    });

    const [files, setFiles] = useState(acceptedFiles)

    useEffect(() => {
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
                <div className='dz-default dz-message'><span><i className='fa fa-cloud-upload'></i> {props.title}</span></div>
            </div>
            <aside className='dropzoneAside'>
                {acceptedFiles.length > 0 && <>
                    <h5>Files</h5>
                    <ul>
                        {files.map((file) =>
                            <li key={file.path}>{file.path}
                                <button onClick={() => {deleteImg(file.path)}} name={file.path} className='closeBtn'>X</button>
                            </li>)}
                    </ul>
                </>}
                {fileRejectionItems.length > 0 && <>
                    <h5>Errors</h5>
                    <ul>{fileRejectionItems}</ul>
                </>}
            </aside>
        </>
    )
}

export default DropzoneComponent;
