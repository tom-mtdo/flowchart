import React, { useState, useContext } from 'react';
import Shape from '../Shape';
import { ItemTypes } from '../../common/Constants';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import {rect, arrow, docu} from '../../assets/svg';
import { styles, rightStyles, buttonStyles } from './Square.style';

export default function Square({leftwidth}) {    
    const [shapes, setShapes] = useState({});

    const addShape = (id, shape, name, left, top, width, height) => {
        setShapes({
            ...shapes,
            [id]: { shape, name, left, top, width, height }
        });
    };

    const moveShape = (id, left, top) => {
        setShapes(
            update(shapes, { 
                [id]: { $merge: { top, left } }
            })
        );
    };

    const updateShapeName = (id, value) => {
        setShapes( 
            update(shapes, { 
                [id]: { $merge: { name: value } }
            })
        );
    };

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
    };

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

    // this is for testing
    // useEffect( () => {
    //         addShape('shape2', 'rectangle', 'process2', 100, 100);
    //     },[]
    // );

    const exportJson = () => {
        const result = generateJson();
        displayJson(result);
    };

    const generateJson = () => {
        const ids = Object.keys(shapes);
        // alert('length: ' + ids.length);
        const returnJson = ids.map(shapeId => {
            return ({
                "shape": shapes[shapeId].shape,
                "name": shapes[shapeId].name,
                "positionX": shapes[shapeId].left,
                "positionY": shapes[shapeId].top
            })
        });

        return returnJson;
    }

    const displayJson = (jsonObject) => {
        var winPrint = window.open('', '', 'left=0,top=0,width=800,height=600,toolbar=0,scrollbars=0,status=0', "_blank");
        winPrint.document.write(JSON.stringify(jsonObject));
        winPrint.document.close();
        // open in new tab
        // const something = window.open("data:text/json," + encodeURIComponent(JSON.stringify(returnJson)),
        //                "_blank");
        // something.focus();    
    }

    return (
        <div ref={drop} style={styles} >
            <div style={rightStyles}>
                <span>Canvas</span>
                <button style={buttonStyles} onClick={exportJson}>Export JSON</button>
            </div>
            {Object.keys(shapes).map(key => renderShape(shapes[key], key))}
        </div>
    )
}