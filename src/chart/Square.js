import React, { useState, useCallback, useContext } from 'react';
import Shape from './Shape';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import {rect, arrow, docu} from './svg';
import ChartContext from './common/ChartContext';

export default function Square({black, leftwidth}) {
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';
    
    const [shapes, setShapes] = useState({
        // shape1: {shape: 'rectangle', name: 'process1', top: 10, left: 20},
    });

    const addShape = useCallback(
        (id, shape, name, left, top, width, height) => {
            setShapes({
                ...shapes,
                [id]: {
                    shape, name, left, top, width, height
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

    // const shapeProps = {
    //     shape: 'rectangle', 
    //     name: 'Process1', 
    //     top: 10, 
    //     left: 20,
    //     id: 'id1',
    //     width: 108, 
    //     height: 78,
    //     updateName: updateShapeName,
    // }


    const renderShape = (item, id) => {
        switch (item.shape) {
            case 'rectangle':
                return <Shape key={id} id={id} updateName={updateShapeName} {...item}>{rect}</Shape>
            case 'arrow':
                return <Shape key={id} id={id} updateName={updateShapeName} {...item}>{arrow}</Shape>
            case 'document':
                return <Shape key={id} id={id} updateName={updateShapeName} {...item}>{docu}</Shape>
            default:
                return <Shape key={id} id={id} updateName={updateShapeName} {...item}>{rect}</Shape>
        }
    }

    const [, drop] = useDrop({
        accept: ItemTypes.SHAPE,
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();

            let left = Math.round(item.left + delta.x);
            let top = Math.round(item.top + delta.y);
            if (shapes[item.id]){
                moveShape(item.id, left, top);
            } else {
                const uuidv1 = require('uuid/v1');
                addShape(uuidv1(), item.shape, item.name, left - leftwidth, top, item.width, item.height);
            }
        }
    });

    const styles = {
        backgroundColor: fill,
        color: stroke,
        width: '700px',
        height: '700px',
        border: '1px solid black',
        borderTop: 'none',
        borderLeft: 'none',
        position: 'relative',            
    }

    const updateShapeName = (id, value) => {
        // alert('Id: ' + id + ", value: " + value);
        setShapes( 
            update(shapes, { 
                [id]: {
                    $merge: { name: value },
                }
            })
        );
    }

    // useEffect( () => {
    //         addShape('shape2', 'rectangle', 'process2', 100, 100);
    //     },[]
    // );
    
    const eventEmitter = useContext(ChartContext);
    eventEmitter.on('exportjson', function(data) {
        alert('Hello');
    });

    return (
        <div ref={drop} style={styles} >
            {Object.keys(shapes).map(key => renderShape(shapes[key], key))}
        </div>
    )
}