import React from 'react';
import Board from './Board';
import BoardHead from './BoardHead';
import BoardTitle from './BoardTitle';

export default function FlowChart() {
    const styles = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <div style = {styles}>  
            <BoardTitle />
            <BoardHead />
            <Board />
        </div>
    );
}