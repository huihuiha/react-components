import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return <div>hello world</div>
}

root.render(<App></App>);
