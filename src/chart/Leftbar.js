import React, { useState, useCallback, useEffect } from 'react';
import Knight from './Knight';
import update from 'immutability-helper'
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd'

export default function Leftbar({black}) {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    const [shapes, setShapes] = useState({
        knight: {shape: 'rectangle', name: '', top: 10, left: 20},
    });

    const renderShape = (item, id) => {
        return <Knight id={id} {...item}/>
    }

    return (
        // <div ref={drop} style={{ 
        <div style={{ 
                backgroundColor: fill,
                color: stroke,
                width: '150px',
                height: '700px',
                border: '1px solid black',
                position: 'relative',            
            }} >
            {renderShape(shapes['knight'], 'knight')}
        </div>
    )
}