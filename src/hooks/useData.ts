import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface fetchresponse<T>{
    count:number;
    results:T[];

}

const useData = <T>(endpoint:string)=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
        const controller =new AbortController()
        setLoading(true);
      apiClient.get<fetchresponse<T>>(endpoint,{signal:controller.signal})
        .then(res => {
          console.log('API response:', res.data); // Log API response
          if (res.data && res.data.results) {
            setData(res.data.results);
          } else {
            throw new Error('Invalid API response structure');
          }
          setLoading(false)
        })
        .catch(err => {
          if(err instanceof CanceledError) return
          setError(err.message);
          setLoading(false)
        });
        return ()=>controller.abort();
    }, []); // Add dependency array here
    return { data,error,loading}
}
export default useData;