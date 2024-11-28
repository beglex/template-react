import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {App} from '@root/App';

createRoot(document.querySelector('#root') as HTMLElement).render(
    import.meta.env.VITE_REACT_STRICT_MODE === 'true'
        ? (
            <StrictMode>
                <App />
            </StrictMode>
        )
        : (
            <App />
        ),
);
