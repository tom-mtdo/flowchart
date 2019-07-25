import React from 'react';
import Square from './square/Square';
import Leftbar from './Leftbar';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

export default function Board() {

    const styles = {
        height: '900',
        display: 'flex',
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={styles}>
                <Leftbar black={false} leftwidth={150}/>
                <Square black={false} leftwidth={150}/>
            </div>
        </DndProvider>
    )
}