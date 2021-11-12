import React,{useContext,useState,useEffect} from 'react'
import { PlanogramContext } from '../../context/PlanogramContextProvider'
import { SelectedCellsContext } from '../../context/SelectedCellsContextProvider'
import './InputForm.css'

const FormGroup = ({children,labelText}) => {
    return(
        <div className='formgroup'>
            <label htmlFor="">{labelText}</label>
            {children}
        </div>
    )
}

const InputForm = () => {
    const [rows,setRows] = useState(0)
    const [cols,setCols] = useState(0)
    const [category,setCategory] = useState('')
    const [color,setColor] = useState('#000000')
    const {updateData} = useContext(PlanogramContext)
    const {updateCells} = useContext(SelectedCellsContext)
    useEffect(()=>{
        updateData({
            rows,
            cols,
            category,
            color
        })
    },[rows,cols,category,color])
    return (
        <div className='inputform-layout'>
            <h1 style={{fontSize: '1.5rem',marginBottom: '1rem', marginTop: '1rem'}}>Planogram UI</h1>
            <form>
                <div className='formgroup-wrapper'>
                    <FormGroup labelText='Enter rows'>
                        <input type="text" value={rows} onChange={(e)=>setRows(e.target.value)} />
                    </FormGroup>
                    <FormGroup labelText='Enter columns'>
                        <input type="text" value={cols} onChange={(e)=>setCols(e.target.value)} />
                    </FormGroup>
                </div>
                <div className='formgroup-wrapper'>
                    <FormGroup labelText='Name a category'>
                        <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
                    </FormGroup>
                    <FormGroup labelText='Box Color'>
                        <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />
                    </FormGroup>
                </div>
                <input onClick={() => updateCells(true)} className='btn' type="button" value="Fix Selection" />
            </form>
        </div>
    )
}

export default InputForm
