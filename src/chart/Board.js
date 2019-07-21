import React from 'react';
import Knight from './Knight';
import Square from './Square';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export default function Board() {
  return (
    <DndProvider backend={HTML5Backend}>
        <div style={{height: '100%'}}>
            <Square black={false}>
                <Knight />
            </Square>
        </div>
    </DndProvider>
  )
}