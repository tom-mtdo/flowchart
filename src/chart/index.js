import React from 'react';
import Board from './Board';
import BoardHead from './BoardHead';
import BoardTitle from './BoardTitle';
import ChartContext from './common/ChartContext';
import { eventEmitter } from './common/ChartContext';

export default function FlowChart() {
    const styles = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    return (
        <ChartContext.Provider value={eventEmitter}>
            <div style = {styles}>  
                <BoardTitle />
                <BoardHead />
                <Board />
            </div>
        </ChartContext.Provider>
    );
}