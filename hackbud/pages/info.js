import api from "@/components/appwrite";
import { useEffect } from "react";

function Info(){
    const {account,databases}  = api();

    useEffect(async ()=>{
        const accountInfo = await account.get()
        console.log(accountInfo)
    })

    const postInfo = () => {
        
    }

    return(
        <div>
            <h1>Info</h1>
        </div>
    );
}


export default Info;