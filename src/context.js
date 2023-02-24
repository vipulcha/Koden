import React from 'react';
import { useContext, useReducer,useEffect } from 'react';
import reducer from "./reducer";

let API = "https://codeforces.com/api/contest.list?gym=false";
const initialState = {
    status:"OK",
    result: [],
}

const AppContext = React.createContext();

//to create a provider function
const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchApiData=async(url)=>{
      try{
        const res=await fetch(url);
        const data=await res.json();
        // console.log(data);
        dispatch({
            type:"GET_CONTESTS",
            payload:{
                result:data.result,
            }
    });
      } catch(error){
        console.log(error);
      }
    }
  
  useEffect(()=>{
    fetchApiData(API);
  },[]);

    return( 
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    );
};

//custom hook create
const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};