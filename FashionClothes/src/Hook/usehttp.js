import axios from "axios"
import { useCallback , useEffect, useState } from "react"
export const sendHttpRequest= async (url , config , method )=>{
    let response ='';

if(config === 'Get'){
    response = await axios(url , method)
} 

else if(config === 'post'){  
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
    if((config && (config.method==='Get'||!config.method))|| !config) { sendRequest() 
    }
}, [sendRequest , config ]) 

return{
        data,
        isLoading,
        error,
        sendRequest
    }
}




/*import axios from "axios"
import { useCallback , useEffect, useState } from "react"
export const sendHttpRequest= async (url , config )=>{
    let response ='';

    console.log(url , config.object);

if(config.method === 'Get'){
    response = await axios(url , config.object)
} 

else if(config.method==='post'){  
    console.log("http");
    response=await axios.post(url , config)  
}
else if(!response.ok){
      throw  new Error(response.message|| "error");
}
 return response
}

export const useHttp = (url ,config, initialData )=>{
    const [data ,setData]=useState(initialData)
    const [isLoading ,setIsLoading]=useState(false)
    const [error , setError]=useState()
    const sendRequest = useCallback(async function sendRequest(config){        
   setIsLoading(true)
    
     try{
        const resData= await sendHttpRequest(url , config )
       setData(resData.data)
     }catch(error){
        setError(error.message || 'SomeThing went wrong!')
     }
    setIsLoading(false)
 }
, [url , config])

/*
   useEffect(()=>{
   // console.log("http");
    
   (config==='Get') && sendRequest();
   //(config==="post")&& sendRequest()
} , [config , sendRequest]) 
 */
/*
console.log(data);

   return{
        data,
        isLoading,
        error,
        sendRequest
    }
}*/