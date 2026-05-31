import {useEffect} from 'react'

const Users = () => {
    useEffect(() => {
        const controller =new AbortController();
        async function getUsers() {
            try{
                let resp=await fetch("https://dummyjson.com/Users",{signal:controller.signal});
                let data= await resp.json();
                console.log(data);
            }catch (error) {
                console.log(error);
                
            }
        }
        getUsers();
        return () => {
            controller.abort();
        }


    },[]);
  return (
    <div>
       <h1> Users </h1>
        </div>
  )
}

export default Users