import axios from "axios"
import { useCallback , useEffect, useState } from "react"

export const sendHttpRequest= async (url , config , method='' )=>{
    let response ='';

if(config === 'Get'){
    response = await axios(url , method)
} 
else if(config === 'post' && method !== ''){  
    response=await axios.post(url , method) 
}
else if(!response.ok){
      throw  new Error(response.message|| "error");
}
 return response
}
export const useHttp = (url , config ,initialData )=>{
    const [data , setData]=useState(initialData)
    const [isLoading ,setIsLoading]=useState(false)
    const [error , setError]=useState()
    const sendRequest = useCallback(async function sendRequest(method){
   setIsLoading(true)
     try{
         const resData= await sendHttpRequest(url  , config , method )
         setData(resData.data) 
     }catch(error){                        
        setError(error?.response?.data || 'SomeThing went wrong!')
     }
   setIsLoading(false)
 } 
, [url , config ]) 

  useEffect(()=>{
    if((!config.method || config.method === "GET")) { 
        sendRequest() 
    }
}, [sendRequest , config ]) 

return{
        data,
        isLoading,
        error,
        sendRequest
    }
}
