import React,{useContext, useEffect, useState} from 'react'
import exportFromJSON from 'export-from-json'
import { SelectedCellsContext } from '../../context/SelectedCellsContextProvider'
import { PlanogramContext } from '../../context/PlanogramContextProvider'
import { DownloadContext } from '../../context/DownloadContextProvider'
import './DisplayTable.css'

const TableRow = ({name,color,pos}) => {
    return(
        <tr>
            <td>{name}</td>
            <td>
                <div style={{backgroundColor: color}} className='color-col'></div>
            </td>
            <td>{pos}</td>
        </tr>
    )
}

const DisplayTable = () => {
    const [info,setInfo] = useState([]);
    let {shouldSelect,data,updateCells} = useContext(SelectedCellsContext)
    const PlanoGramData = useContext(PlanogramContext)
    const DownloadInfo = useContext(DownloadContext)
    const {pname,shouldSave} = DownloadInfo.saveData
    useEffect(()=>{
        if(shouldSelect){
            setInfo((prev)=>{
                return [
                    ...prev,
                    {
                        name: PlanoGramData.data.category,
                        color: PlanoGramData.data.color,
                        pos: data.join(' ')
                    }
                ]
            })
            updateCells(false)
        }
        if (shouldSave){
            exportFromJSON({data: info, fileName: pname, exportType: 'xls'})
        }
    },[shouldSelect,shouldSave])
    return (
        <div className='table-wrapper'>
            <table id='table'>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Category Color</th>
                        <th className='positions'>Row,Col Points</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((val)=>{
                        return <TableRow name={val.name} color={val.color} pos={val.pos} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayTable
