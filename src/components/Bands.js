import React from 'react'
import Band from './Band'

const Bands = (props) => {
    return(<div>
        <ul>
        {props.bands.map(band => <Band band = {band} deleteBand = {props.deleteBand}/>)}
        </ul>
    </div>)
}

export default Bands