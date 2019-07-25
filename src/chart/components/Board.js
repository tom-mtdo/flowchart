import React from 'react';
import Square from './square/Square';
import Leftbar from './Leftbar';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

export default function Board(props) {

    const styles = {
        height: '900',
        display: 'flex',
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <div style={styles}>
                <Leftbar leftwidth={props.leftwidth}/>
                <Square width={props.width} leftwidth={props.leftwidth} />
            </div>
        </DndProvider>
    )
}