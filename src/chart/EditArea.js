import React from 'react';
import ChartContext from './common/ChartContext';
import { useDrop } from 'react-dnd';

export default class EditArea extends React.Component{
    styles = {
        width: '700px',
        height: '700px',
        border: '1px solid black',
        borderTop: 'none',
        borderLeft: 'none',
        position: 'relative',            
    }

    exportJson = () => {
        alert('Heloooo');
    }

    render(){
        const chartContext = this.context;
        chartContext.eventEmitter.on('exportjson', this.exportJson);
        return (
            <div style={this.styles}>
                Hi there...
            </div>
        )
    }
}

EditArea.contextType = ChartContext;