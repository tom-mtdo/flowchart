import React, { useState, useCallback } from 'react';
import Square from './square/Square';
import Leftbar from './Leftbar';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

export default function BoardTitle() {

    const styles = {
        height: '20px',
        width: '849px',
        textAlign: 'center',
        backgroundColor: '#4474c4',
        color: 'white',
        padding: '10px 0 10px 0',
        border: '2px solid #375c9a',
        fontSize: '13pt',
    };

    return (
        <div style={styles}>
            Simple Flow Chart Editor
        </div>
    )
}