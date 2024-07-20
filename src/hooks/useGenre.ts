import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
interface Genre{
    id:number;
    name:string;
}
interface fetchgenresresponse{
    count:number;
    results:Genre[];

}

const useGenre = ()=>{
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
        const controller =new AbortController()
        setLoading(true);
      apiClient.get<fetchgenresresponse>('/genres',{signal:controller.signal})
        .then(res => {
          console.log('API response:', res.data); // Log API response
          if (res.data && res.data.results) {
            setGenre(res.data.results);
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
    return { genres,error,loading}
}
export default useGenre;