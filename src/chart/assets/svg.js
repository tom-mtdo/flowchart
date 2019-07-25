import React from 'react';
const styles = {
    fill: 'rgb(92, 155, 211)', 
    strokeWidth: 3, 
    stroke: 'rgb(70, 118, 159)'
}

export const rect = (<rect width="100" height="70" style={styles} />);
export const arrow = (<polygon 
        points="3,20 65,20 65,3 103,38 65,73 65,53 3,53" 
        style={styles}
/>);
export const docu = (
    <path d="M 3 68  Q 33 75, 50 65 Q 73 53, 103 55 L 103 3 L 3 3 Z" 
    style={styles}/>

);