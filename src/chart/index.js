import React from 'react';
import Board from './components/Board';
import BoardTitle from './components/BoardTitle';

export default function FlowChart() {
    const styles = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    const leftWidth = 150;
    const width = 900;

    return (
        <div style = {styles}>  
            <BoardTitle width={width}/>
            <Board width={width} leftwidth={leftWidth}/>
        </div>
    );
}