import { useEffect } from "react"

const Summer = () => {
    useEffect(async()=>{
        const sum =(array)=>{
            return new Promise((resolve,reject)=>
           {
               setTimeout(()=>{
                           
                    let answer=0;
                    array.forEach(element => {answer+=element;
                        
                    });
                    resolve(answer);
                           
                       },1000);
           }
           )}
           const result=await sum([4,5,8,7,6]);
           console.log(result);
        },[]);
        return (
            <div>
                <h1>SUM</h1>
            </div>
        )

    }
export default Summer
