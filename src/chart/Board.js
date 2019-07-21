import React from 'react';
import Knight from './Knight';
import Square from './Square';
import Leftbar from './Leftbar';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default function Board() {
    const styles = {
        height: '100%',
        display: 'flex',
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={styles}>
                <Leftbar black={false}/>
                <Square black={false}/>
            </div>
        </DndProvider>
    )
}