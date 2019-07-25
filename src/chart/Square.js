import React, { useState, useCallback, useContext, useEffect } from 'react';
import Shape from './Shape';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import {rect, arrow, docu} from './svg';
import ChartContext from './common/ChartContext';

export default function Square({leftwidth}) {    
    const styles = {
        width: '700px',
        height: '700px',
        border: '1px solid black',
        borderTop: 'none',
        borderLeft: 'none',
        position: 'relative',            
    };

    const [shapes, setShapes] = useState({
        arrow: {shape: 'arrow', name: 'Flow', top: 110, left: 20, width: 108, height: 78},
        rectangle1: {shape: 'rectangle', name: 'Process', top: 10, left: 20, width: 108, height: 78}
    });

    const addShape = (id, shape, name, left, top, width, height) => {
        setShapes((previousShapes) => {
            return({
                ...previousShapes,
                [id]: {
                    shape, name, left, top, width, height
                }
            });
        });
    };

    const updateShapeName = () => {};

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


    useEffect( () => {
            addShape('shape2', 'rectangle', 'process2', 100, 100);
        },[]
    );

    const exportJson = () => {
        const result = generateJson();
        displayJson(result);
    }

    const generateJson = () => {
        const ids = Object.keys(shapes);
        alert('length: ' + ids.length);
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
        // const something = window.open("data:text/json," + encodeURIComponent(JSON.stringify(returnJson)),
        //                "_blank");
        // something.focus();    
    }

    
    const chartContext = useContext(ChartContext);
    chartContext.eventEmitter.on('exportjson', exportJson);

    return (
        <div style={styles} >
            <button onClick={exportJson}>generate json</button>
            {Object.keys(shapes).map(key => renderShape(shapes[key], key))}
        </div>
    )
}