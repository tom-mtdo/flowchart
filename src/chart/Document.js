import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

// instanceid: 'shape1', shape: 'rectangle', name: 'process1', top: 10, left: 20
export default function Document({id, shape, name, left, top}) {
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
        }
    }

    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.SHAPE, id, shape, name, left, top },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

  return (
    <div ref={drag} style={getStyles(left, top, isDragging)}>
        <svg width="106" height="76" >
            <polygon 
                points="3,73 3,3 103,3 103,63" 
                style={{fill: 'rgb(92, 155, 211)', 'strokeWidth':3, stroke: 'rgb(70, 118, 159)'}}
            />
            <text textAnchor="middle" x="50" y="40" fill="white">{name}</text>
            Sorry, your browser does not support inline SVG.  
        </svg>
    </div>
  
  )
}