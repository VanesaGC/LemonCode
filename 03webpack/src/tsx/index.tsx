import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log("Modo: " + process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

export const HelloWorldComponent = () => {
    return (
        <h4>¡Hola mundo con React!</h4>
    );
}

ReactDOM.render(
    <HelloWorldComponent />,
    document.getElementById('reactContent')
);