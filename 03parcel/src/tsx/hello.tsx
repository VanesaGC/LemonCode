import * as React from 'react';

const logoImg = require('../img/logo_2.png');

export const HelloWorldComponent = () => {
    return (
        <>
            <img src={logoImg} />
            <h4>Hello Parcel con React!!</h4>
        </>
    );
}