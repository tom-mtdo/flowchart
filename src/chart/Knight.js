import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

// instanceid: 'shape1', shape: 'rectangle', name: 'process1', top: 10, left: 20
export default function Knight({id, shape, name, left, top}) {
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
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move'
        }
    }

    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.KNIGHT, id, shape, name, left, top },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

  return (
    <span
        ref={drag}
        style={getStyles(left, top, isDragging)}
    >
        ♘
    </span>
  )
}