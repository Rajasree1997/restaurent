import { useEffect } from "react"
const Async = () => {
    useEffect(async()=>{
        // const firstFunction = (a,b,next)=>{
        //     let c;
        //     setTimeout(()=>{
        //         c =a+ "&" +b;
        //         next(c);

        //     },500);

        // }
        
                
        // firstFunction("apple","orange",(result)=>{
        //     console.log(result);
        // });
        const myPromise =(a,b)=>{
         return new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                        
                         let c =a + "&" + b;
                    //  resolve(c);
                        reject("error");
                    },500);
        }
        )}

        //   myPromise("hello","there").then((result)=>{
        //       console.log(result);
        //   }).catch(result=>{console.log("catch",result);

        //   })
        try{     
                const result = await myPromise("HELLO","THERE");
                console.log(result);

        }catch(error){
            console.log("catch",error);
        }},[])
    return (
        <div>
            <h1>Promises,Async and await</h1>
        </div>
    )
}

export default Async

