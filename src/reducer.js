const reducer=(state,action)=>{
    switch(action.type){
        case "GET_CONTESTS":
            return {
                ...state,
                result: action.payload.result,
            };
    }
    return state;
}

export default reducer;