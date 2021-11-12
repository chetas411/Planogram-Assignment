import React,{createContext} from 'react'

const SelectedCellsContext = createContext();
const SelectedCellsContextProvider = ({data,children}) => {
    return (
        <SelectedCellsContext.Provider value={data}>
            {children}
        </SelectedCellsContext.Provider>
    )
}

export {SelectedCellsContext}
export default SelectedCellsContextProvider
