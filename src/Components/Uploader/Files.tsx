import { AiOutlineFilePdf,AiOutlineFileSearch } from "react-icons/ai";

interface Props {
    uploader?: { file: File; preview: string }[];
  }
  
  export function Files({uploader}:Props){
    return (
      <>
        {uploader.map(({file, preview}: any) => (
            <div className="w-[27.5rem] h-[70px] flex flex-row items-center justify-center bg-[#ffff] rounded-xl border-solid border-2 border-[#bebcc0]">
                {file.type === "application/pdf" ? (
                <AiOutlineFilePdf size="30px" color="red"/>
                ) : (
                <AiOutlineFileSearch />
                )}
                {file ? 
                <div className="ml-6 flex flex-row">
                    <span >{file.name}</span>
                    <span className="ml-2 mr-2"> {file.size}</span>
                    <span> {file.type}</span>
                </div> : <span> 'inputs'</span>}
            </div>
        ))}

      </>
    );
  }
  