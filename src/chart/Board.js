import React, { useState, useCallback } from 'react';
import Knight from './Knight';
import Square from './Square';
import Leftbar from './Leftbar';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default function Board() {
    const [shapes, setShapes] = useState({
        knight1: {top: 10, left: 20},
    });

    const moveShape = useCallback(
        (id, left, top) => {
            setShapes( { [id]: { top: top, left: left } });
        },
        [shapes],        
    )

    const styles = {
        height: '100%',
        display: 'flex',
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={styles}>
                <Leftbar black={false}/>
                <Square black={false} shapes={shapes} moveShape={moveShape}/>
            </div>
        </DndProvider>
    )
}