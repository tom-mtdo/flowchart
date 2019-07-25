import React, { useContext } from 'react';
import ChartContext from './common/ChartContext';

const BoardHead = () => {

    const styles = {
        height: '50px',
        display: 'flex'
    };

    const leftStyles = {
        width: '150px',
        textAlign: 'center',
        padding: '10px 0 10px 0',
        borderLeft: '1px solid black',
        borderRight: '1px solid black',
        fontSize: '15pt',
    }

    const rightStyles = {
        width: '700px',
        textAlign: 'center',
        padding: '10px 0 10px 0',
        borderRight: '1px solid black',
        fontSize: '15pt',
        position: 'relative',
    }

    const buttonStyles = {
        position: 'absolute',
        right: '10px',
        height: '30px',
        width: '130px',
        fontSize: '11pt',
        borderRadius: '6px',
        backgroundColor: '#c7c7c7',
        border: '2px solid #c3c3c3',
    }

    // const theme = useContext(ThemeContext);
    const eventEmitter = useContext(ChartContext);
    const exportJson = () => {
        // alert('Hello world ' + emitter.eventEmitter);
        eventEmitter.emit('exportjson', {});
    }

    return (
        <div style={styles}>
            <div style={leftStyles}>Shapes</div>
            <div style={rightStyles}>
                <span>Canvas</span>
                <button style={buttonStyles} onClick={exportJson}>Export JSON</button>
            </div>
        </div>
    )
}

export default BoardHead;