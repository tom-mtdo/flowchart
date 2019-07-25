import React from 'react'
export const contextData = {
    eventEmitter: 'I am a emitter'
}


const ChartContext = React.createContext( contextData );

export default ChartContext;