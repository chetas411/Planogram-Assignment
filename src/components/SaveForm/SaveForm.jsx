import React, { useState,useContext } from 'react'
import { DownloadContext } from '../../context/DownloadContextProvider'
import './SaveForm.css'

const SaveForm = () => {
    const [planogramName,setPlanogramName] = useState('')
    const {updateSave} = useContext(DownloadContext)
    const downLoadData = () => {
        updateSave({
            pname: planogramName,
            shouldSave: true
        })
    }
    return (
        <form id='save-form'>
            <div>
                <label htmlFor="name">Enter Planogram Name</label>
                <input type="text" value={planogramName} onChange={(e) => setPlanogramName(e.target.value)} />
            </div>
            <button onClick={downLoadData}>Save Planogram</button>
        </form>
    )
}

export default SaveForm
