// import React,{useEffect, useState} from 'react'

// const Products = () => {
//     const [items,setItems]=useState([]);
    
    
//         useEffect(() => {
//             const controller =new AbortController();
//             async function getProducts() {
//                 try{
//                     let resp=await fetch("https://dummyjson.com/products",{signal:controller.signal});
//                     let data= await resp.json();
//                     console.log(data);
//                     setItems(data.products);
//                 }catch (error) {
//                     console.log(error);
                    
//                 }
//             }
//             getProducts();
//             return () => {
//                 controller.abort();
//             }
    
    
//         },[]);
      
//   return (
//     <div>
//         {items.length === 0 ? (
//             <p>No Products available</p>
//         ) : (
//             <section>
//                 {items.map((ele) => {
//                     return (
//                         <div key={ele.id}>
//                             <img src={ele.thumbnail} alt={ele.title} height={200} width={200}/>
//                             <h2>{ele.title}</h2>
//                             <p>{ele.description}</p>
//                         </div>
//                     )
//                 })}
//             </section>
            
//             )}
        
      
//     </div>
//   )
// }

// export default Products