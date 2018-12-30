import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const HelloWorldComponent = () => {
    return (
        <h4>¡Hola mundo con React!</h4>
    );
}

ReactDOM.render(
    <HelloWorldComponent />,
    document.getElementById('reactContent')
);