export let initialState=0;
export const reducerFunc=(prev,action) =>{
    switch (action) {
        case "incre":
            return prev+1;
            
        case "decre":
        // checking: if(prev===0){
        //         alert("count is already 0");
        //         break checking;
        //     }
            return prev> 0 ? prev-1 :0;
        
        case "res":
            return 0;
    }
};