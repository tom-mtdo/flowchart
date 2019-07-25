import React, { useState } from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd';
import { isAbsolute } from 'path';
// import ContentEditable from 'react-contenteditable';

// instanceid: 'shape1', shape: 'rectangle', name: 'process1', top: 10, left: 20
export default function Rectangle({id, shape, name, left, top, width, height, updateName, children}) {

    const [showShapeName, setShowShapeName] = useState( false );

    const getStyles = (left, top, isDragging) => {
        const transform = `translate3d(${left}px, ${top}px, 0)`;
        return {
            position: 'absolute',
            transform,
            WebkitTransform: transform,
            // IE fallback: hide the real node using CSS when dragging
		    // because IE will ignore our custom "empty image" drag preview.
            opacity: isDragging ? 0.5 : 1,
            fontSize: 15,
            fontWeight: 'bold',
            cursor: 'move',
            width: `${width}px`,
            height: `${height}px`,    
        }
    }

    const svgStyles = {
        position: 'absolute',
        top: '0',
        left: '0',
        'zIndex': '8',
        width: '106px',
        height: '76px',
    };

    const shapeNameStyles = {
        position: 'absolute',
        'zIndex': '9',
        top: '25px',
        left: '3px',
        width: '88px',
        display: showShapeName ? 'block' : 'none'
    }

    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.SHAPE, id, shape, name, left, top, width, height },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const handleChange = evt => {
        if (updateName) {
            updateName(id, evt.target.value);
        }
    }
    
    const nameClick = () => {
        if (updateName) {
            setShowShapeName(true);
        }
    }
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            hideNameInput();
        }
    }

    const hideNameInput = () => {
        setShowShapeName(false);
    }

    return (
        <div ref={drag} style={getStyles(left, top, isDragging)}>
            <svg style={svgStyles}>
                {children}
                <text textAnchor="middle" x={`${width/2}px`} y={`${height/2}px`} fill="white" onClick={nameClick}>{name}</text>
            </svg>
            <input value={name} onChange={handleChange} style={shapeNameStyles} onKeyDown={handleKeyDown} onBlur={hideNameInput}></input>
        </div>
    
    )
}