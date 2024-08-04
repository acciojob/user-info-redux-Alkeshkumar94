const initialState={
    name:"",
    email:"",
}
const useReducer=(state=initialState,action)=>{
    switch(action.type){
        case "update_name":return {
            ...state,
            name:action.payload,
        };
        case "update_email":return{
            ...state,
            email:action.payload,
        };
        default:
            return state;
    }
}
export default useReducer;