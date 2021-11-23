import { useEffect } from "react"
const Async = () => {
    useEffect(()=>{
        const firstFunction = (a,b,next)=>{
            let c;
            setTimeout(()=>{
                c =a+ "&" +b;
                next(c);

            },500);

        }
        
                
        firstFunction("apple","orange",(result)=>{
            console.log(result);
        });
               
    

    },[])
    return (
        <div>
            <h1>Promises,Async and await</h1>
        </div>
    )
}

export default Async

