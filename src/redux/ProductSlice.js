import { createSlice } from "@reduxjs/toolkit"

const statuses= Object.freeze( {
    Idle:"idle",
    Error:"error",
    loading:"wait Plz"
})

const ProductSlice=createSlice({
    name:'product',
initialState:{
    data:[],
    status:statuses.Idle
}, 
    reducers:{
        setProducts(state,action){
            state.data=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
})

export const {setProducts,setStatus}=ProductSlice.actions
export default ProductSlice.reducer

// Thunk

export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(statuses.loading))
        try{
            const api = await fetch("https://fakestoreapi.com/products");
            const data = await api.json();
            dispatch(setProducts(data))
            dispatch(setStatus(statuses.Idle))
        }
        catch(error){
            console.log(error)
            dispatch(setStatus(statuses.Error))
}
}
}