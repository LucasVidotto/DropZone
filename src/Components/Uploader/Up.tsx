import { AiOutlineCloudUpload } from "react-icons/ai";
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Files } from "./Files";

export function Up(){
      const [uploader, setUploader] = useState<{ file: File; preview: string; }[]>([]);
      const onDrop = useCallback((acceptedFiles: File[]) => {
        const files = acceptedFiles.map((file: File) => ({
          file,
          preview: URL.createObjectURL(file),
        }));
        setUploader((prevUploader) => [...prevUploader, ...files]);
      }, []);
      const {acceptedFiles,getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      const types = acceptedFiles.map(type=>{
        return type.type
      })
      /* const files = acceptedFiles.map(file => (
        <span key={file.path}>
          {file.path} - {file.size} bytes - {file.type}
        </span>
      )); */
    return(
        <>
        <div 
            {...getRootProps()}
            className="w-[27.5rem] h-40 flex flex-col items-center justify-center mb-5 bg-[#F3F0FF] rounded-xl border-2 border-[#bbb9be] border-dashed">
                <AiOutlineCloudUpload color="black" size="30px"/>
                <input {...getInputProps()} />
            
            {
            isDragActive ?
                <p>Solte os arquivos aqui...</p> :
                <span>Importe seus arquivos</span>
            }
            <span className="opacity-40 text-[#37363a]">Arraste ou clique para fazer upload</span>
            {types.toString()}
        </div>
        
        <div>
            <Files uploader={uploader} /* types={types} *//>
        </div>
        </>
    )
}