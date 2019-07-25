import React, { useState, useCallback, useEffect } from 'react';
import Shape from './Shape';
import {rect, arrow, docu} from '../assets/svg';

export default function Leftbar({black,leftwidth}) {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    const leftStyles = {
        width: '100%',
        textAlign: 'center',
        padding: '10px 0 10px 0',
        fontSize: '15pt',
    }

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
            case 'arrow':
                return <Shape key={id} id={id} updateName={''} {...item}>{arrow}</Shape>
            case 'document':
                return <Shape key={id} id={id} updateName={''} {...item}>{docu}</Shape>
            default:
                return <Shape key={id} id={id} updateName={''} {...item}>{rect}</Shape>
        }
    }

    return (
        <div style={{ 
                backgroundColor: fill,
                color: stroke,
                width: `${leftwidth}px`,
                height: '700px',
                border: '1px solid black',
                borderTop: 'none',
                position: 'relative',            
            }} >
            <div style={leftStyles}>Shapes</div>
            {Object.keys(shapes).map(key => renderShape(shapes[key], key))}
        </div>
    )
}