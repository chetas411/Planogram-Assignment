import React,{Children, createContext} from 'react'

const PlanogramContext = createContext();
const PlanogramContextProvider = ({data,children}) => {
    return (
        <PlanogramContext.Provider value={data}>
            {children}
        </PlanogramContext.Provider>
    )
}

export {PlanogramContext}
export default PlanogramContextProvider
