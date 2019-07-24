import React, { useState, useCallback, useEffect } from 'react';
import Shape from './Shape';
import {rect, arrow, docu} from './svg';

export default function Leftbar({black,leftwidth}) {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    // shape: 'rectangle', 
    // name: 'Process1', 
    // top: 10, 
    // left: 20,
    // id: 'id1',
    // width: 108, 
    // height: 78,

    const [shapes, setShapes] = useState({
        rectangle: {shape: 'rectangle', name: 'Process', top: 10, left: 20, width: 108, height: 78},
        arrow: {shape: 'arrow', name: 'Flow', top: 110, left: 20, width: 108, height: 78},
        document: {shape: 'document', name: 'Document', top: 210, left: 20, width: 108, height: 78},
    });

    // const rect = (<rect width="100" height="70" style={{fill: 'rgb(92, 155, 211)', 'strokeWidth':3, stroke: 'rgb(70, 118, 159)'}} />);

    const renderShape = (item, id) => {
        switch (item.shape) {
            case 'rectangle':
                return <Shape key={id} id={id} updateName={''} {...item}>{rect}</Shape>
                // return <Rectangle key={id} id={id} {...item}/>
            case 'arrow':
                return <Shape key={id} id={id} updateName={''} {...item}>{arrow}</Shape>
                // return <Arrow key={id} id={id} {...item}/>
            case 'document':
                return <Shape key={id} id={id} updateName={''} {...item}>{docu}</Shape>
                // return <Document key={id} id={id} {...item}/>    
            default:
                return <Shape key={id} id={id} updateName={''} {...item}>{rect}</Shape>
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
                borderTop: 'none',
                position: 'relative',            
            }} >
            {Object.keys(shapes).map(key => renderShape(shapes[key], key))}
        </div>
    )
}