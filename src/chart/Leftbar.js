import React, { useState, useCallback, useEffect } from 'react';
import Rectangle from './Rectangle';
import update from 'immutability-helper'
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd'

export default function Leftbar({black,leftwidth}) {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    const [shapes, setShapes] = useState({
        rectangle: {shape: 'rectangle', name: 'Process', top: 10, left: 20},
    });

    const renderShape = (item, id) => {
        switch (item.shape) {
            case 'rectangle':
                return <Rectangle id={id} {...item}/>
            default:
                return <Rectangle id={id} {...item}/>        
        }
    }

    return (
        // <div ref={drop} style={{ 
        <div style={{ 
                backgroundColor: fill,
                color: stroke,
                width: `${leftwidth}px`,
                height: '700px',
                border: '1px solid black',
                position: 'relative',            
            }} >
            {Object.keys(shapes).map(key => renderShape(shapes[key], key))}
        </div>
    )
}