import React,{useContext} from 'react'
import { PlanogramContext } from '../../context/PlanogramContextProvider';
import Tile from './Tile/Tile';
import './Grid.css'

const GridRow = ({children}) => {
    return(
        <div className='grid-row-box'>
            {children}
        </div>
    )
}


const Grid = () => {
    const {data} = useContext(PlanogramContext)
    let Matrix = []
    for(let r = 0; r < data.rows; r++){
        let CurrRow = []
        for(let c = 0; c < data.cols; c++){
            CurrRow.push(
                <Tile color={data.color} position={{x: r, y: c}} />
            )
        }
        Matrix.push(
            <GridRow>
                {CurrRow}
            </GridRow>
        )
    }
    return (
        <div className='grid-layout'>
            <h1 style={{fontSize: '1.5rem'}}>Planogram Boxes</h1>
            <div className='grid-box'>
                {Matrix}
            </div>
        </div>
    )
}

export default Grid
