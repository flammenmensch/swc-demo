import React from 'react'
import ReactDOM from 'react-dom/client'
import GenericComponent from "./GenericComponent.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <h1>Demo</h1>
        <GenericComponent<string> value='Value' />
    </React.StrictMode>,
)
