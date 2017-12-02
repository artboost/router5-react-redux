import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import htmlescape from 'htmlescape';

const DEV = process.env.NODE_ENV === 'development';
const assetManifest = JSON.parse(process.env.REACT_APP_ASSET_MANIFEST || '{}');
const bundleUrl = DEV ?
  '/static/js/bundle.js' :
  `/${assetManifest['main.js']}`;

const css = DEV ?
  '' : // in DEV the css is hot loaded
  `<link href="/${assetManifest['main.css']}" media="all" rel="stylesheet" />`;

export default (app, state) => {
  const doc = renderToStaticMarkup((
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <meta name="theme-color" content="#000000" />

        {css}

        <link rel="manifest" href="/public/manifest.json" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <title>React App</title>
      </head>

      <body>
        <div id="root">
          {app}
        </div>

        <script dangerouslySetInnerHTML={{ __html: `APP_STATE = ${htmlescape(state)}` }} />
        <script type="application/javascript" src={bundleUrl} />
      </body>
    </html>
  ));

  return `<!DOCTYPE html>\n${doc}`;
};
