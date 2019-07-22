import React, { useState } from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd';
import { isAbsolute } from 'path';
// import ContentEditable from 'react-contenteditable';

// instanceid: 'shape1', shape: 'rectangle', name: 'process1', top: 10, left: 20
export default function Rectangle({id, shape, name, left, top}) {

    const getStyles = (left, top, isDragging) => {
        const transform = `translate3d(${left}px, ${top}px, 0)`;
        return {
            position: 'absolute',
            transform,
            WebkitTransform: transform,
            // IE fallback: hide the real node using CSS when dragging
		    // because IE will ignore our custom "empty image" drag preview.
            opacity: isDragging ? 0.5 : 1,
            height: isDragging ? 0 : '',
            fontSize: 15,
            fontWeight: 'bold',
            cursor: 'move',
            width: '108px',
            height: '78px',    
        }
    }

    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.SHAPE, id, shape, name, left, top },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const [localName, setName] = useState( 'Shape 1' );
    const [showShapeName, setShowShapeName] = useState( false );

    const handleChange = evt => {
        setName(evt.target.value);
    }

    const svgStyles = {
        position: 'absolute',
        top: '0',
        left: '0',
        'z-index': '8',
        width: '106px',
        height: '76px',
    };

    const shapeNameStyles = {
        position: 'absolute',
        'z-index': '9',
        top: '25px',
        left: '3px',
        width: '88px',
        display: showShapeName ? 'block' : 'none'
    }

    const nameClick = () => {
        setShowShapeName(true);
    }
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setShowShapeName(false);
        }
    }

    const hideNameInput = () => {
        setShowShapeName(false);
    }

    return (
        <div ref={drag} style={getStyles(left, top, isDragging)}>
            <svg style={svgStyles}>
                <rect width="100" height="70" style={{fill: 'rgb(92, 155, 211)', 'strokeWidth':3, stroke: 'rgb(70, 118, 159)'}} />
                <text textAnchor="middle" x="50" y="40" fill="white" onClick={nameClick}>{localName}</text>
            </svg>
            <input value={localName} onChange={handleChange} style={shapeNameStyles} onKeyDown={handleKeyDown} onBlur={hideNameInput}></input>
        </div>
    
    )
}