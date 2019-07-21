import React from 'react';
import Knight from './Knight';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd'

export default function Square({black, shapes, moveShape}) {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    const renderShape = (item, id) => {
        return <Knight id={id} {...item}/>
    }

    const [, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();

            let left = Math.round(item.left + delta.x);
			let top = Math.round(item.top + delta.y);

            moveShape(item.id, left, top);
        }
    });

    const styles = {
        backgroundColor: fill,
        color: stroke,
        width: '700px',
        height: '700px',
        border: '1px solid black',
        position: 'relative',            
    }

    return (
        <div ref={drop} style={styles} >
            {renderShape(shapes['knight1'], 'knight1')}
        </div>
    )
}