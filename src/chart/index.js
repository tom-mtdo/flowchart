import React from 'react';
import Board from './components/Board';
import BoardTitle from './components/BoardTitle';

export default function FlowChart() {
    const styles = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div style = {styles}>  
            <BoardTitle />
            <Board />
        </div>
    );
}