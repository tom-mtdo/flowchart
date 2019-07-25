import React from 'react';
import { EventEmitter2 } from 'eventemitter2';

export const eventEmitter = new EventEmitter2({wildcard: false, maxListeners: 0});

const contextData = {
    eventEmitter: eventEmitter
}

const ChartContext = React.createContext( contextData );

export default ChartContext;