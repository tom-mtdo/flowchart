import React, { useState, useCallback, useEffect } from 'react';
import Knight from './Knight';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';

export default function Square({black}) {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    
    const [shapes, setShapes] = useState({
        shape1: {shape: 'rectangle', name: 'process1', top: 10, left: 20},
    });

    const addShape = useCallback(
        (id, shape, name, left, top) => {
            setShapes({
                ...shapes,
                [id]: {
                    shape, name, left, top
                }
            });
        },
        [shapes],        
    )
    
    const moveShape = useCallback(
        (id, left, top) => {
            setShapes( 
                update(shapes, { 
                    [id]: {
                        $merge: { top, left },
                    }
                })
            );
        },
        [shapes],        
    )
    const renderShape = (item, id) => {
        switch (item.shape) {
            case 'rectangle':
                return <Knight id={id} {...item}/>
            default:
                return <Knight id={id} {...item}/>        
        }
    }

    const [, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();

            let left = Math.round(item.left + delta.x);
            let top = Math.round(item.top + delta.y);
            // alert('delta.x: ' + delta.x + 'left');
            if (shapes[item.id]){
                moveShape(item.id, left, top);
            } else {
                const uuidv1 = require('uuid/v1');
                addShape(uuidv1(), item.shape, '', left - 150, top);
            }
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

    useEffect( () => {
            addShape('shape2', 'rectangle', 'process2', 100, 100);
        },[]
    );

    return (
        <div ref={drop} style={styles} >
            {Object.keys(shapes).map(key => renderShape(shapes[key], key))}
        </div>
    )
}