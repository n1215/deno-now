import React from 'https://unsafe-production.jspm.io/react';
import ReactDOMServer from 'https://unsafe-production.jspm.io/react-dom/server.js';

function App() {
    return (
        <html lang="ja">
            <head>
                <meta charaset="utf-8" />
                <title>Deno</title>
            </head>
            <body>
                <p>Hello, Deno! version: {Deno.version.deno} </p>
            </body>
        </html>
    );
}
const template = "<!DOCTYPE html>\n" + ReactDOMServer.renderToString(<App />);
export default template;