import React, { useReducer } from 'react'

export default (defaultValue, reducer, actions) => {
    //actions is an object containing action functions, each function takes in a dispatch and returns a function 
    //it looks like someactiononreducer=(dispatch)=>{
    //     return ()=>{
    //         disptach({someactionObject})
    //     }
    // }
    const Context = React.createContext();

    const ContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)
        let actionsObj = {};
        //Remember: actions==={someactiononreducer: (dispatch)=>{return ()=>dispatch({someactionObject})}, ...}
        for (let key in actions) {
            actionsObj[key] = actions[key](dispatch)
        }
        return (
            <Context.Provider value={{ state, ...actionsObj }}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, ContextProvider }
}