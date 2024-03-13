import { render } from 'react-dom';
import { App } from './app/App'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'

render(
    (
        <Router>
            <ErrorBoundary>
                <StoreProvider>
                        <App />
                </StoreProvider>
            </ErrorBoundary>
        </Router>
    ), document.getElementById('root'),
)
