
import { AiOutlineFilePdf, AiOutlineFileSearch } from "react-icons/ai";
type Props={
    files : any,
    types: any
}
export function Files({files,types}:Props){
    
    return(
        <>
            {files.length > 0  ? 
            <div className="w-[27.5rem] h-[70px] flex flex-row items-center justify-center bg-[#ffff] rounded-xl border-solid border-2 border-[#bebcc0]">
                {types == "application/pdf" ? 
                    <AiOutlineFilePdf />
                
                : 

                    <AiOutlineFileSearch />}
                {files ? files : 'inputs'}
            </div> :
            <span className="text-[#bebcc0]">Sem Dados</span>
            } 
        </>
    )
}