import React from 'react';

// define and export our Layout component
export const Layout = ({ content }) => (
    <div>
        <h1>My App</h1>
        <hr />
        <div>{content}</div>
    </div>
);

