import React, { useState } from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd';
// import ContentEditable from 'react-contenteditable';

// instanceid: 'shape1', shape: 'rectangle', name: 'process1', top: 10, left: 20
export default function Rectangle({id, shape, name, left, top}) {
    const getStyles = (left, top, isDragging) => {
        const transform = `translate3d(${left}px, ${top}px, 0)`;
        return {
            position: 'absolute',
            transform,
            WebkitTransform: transform,
            // IE fallback: hide the real node using CSS when dragging
		    // because IE will ignore our custom "empty image" drag preview.
            opacity: isDragging ? 0.5 : 1,
            height: isDragging ? 0 : '',
            fontSize: 15,
            fontWeight: 'bold',
            cursor: 'move',
        }
    }

    const [{isDragging}, drag] = useDrag({
        item: { type: ItemTypes.SHAPE, id, shape, name, left, top },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    let contentEditable = React.createRef();
    const [localName, setName] = useState( 'Shape 1' );

    const handleChange = evt => {
        alert('New value ' + evt.target);
        setName(evt.target.value);
    }

  return (
    <div ref={drag} style={getStyles(left, top, isDragging)}>
        <svg width="106" height="76" >
            <rect width="100" height="70" style={{fill: 'rgb(92, 155, 211)', 'strokeWidth':3, stroke: 'rgb(70, 118, 159)'}} />
            {/* <ContentEditable
              innerRef={contentEditable}
              html={this.state.html} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='text' // Use a custom HTML tag (uses a div by default)
            /> */}
            <text textAnchor="middle" x="50" y="40" fill="white" contentEditable="true" onInput={handleChange}>{localName}</text>
            Sorry, your browser does not support inline SVG.  
        </svg>
    </div>
  
  )
}