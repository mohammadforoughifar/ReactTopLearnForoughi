import { toast } from "react-toastify";


export const Success=(message)=>{
    toast.success(message,
        {
            position:"top-right",
            closeOnClick:true
        })
}



export const Error=(message)=>{
    toast.error(message,
        {
            position:"top-right",
            closeOnClick:true
        })
}