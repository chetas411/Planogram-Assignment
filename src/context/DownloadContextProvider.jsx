import React,{createContext} from 'react'

const DownloadContext = createContext()
const DownloadContextProvider = ({data,children}) => {
    return (
        <DownloadContext.Provider value={data}>
            {children}
        </DownloadContext.Provider>
    )
}

export {DownloadContext}
export default DownloadContextProvider
