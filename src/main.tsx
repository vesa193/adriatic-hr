import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            retry: false,
        },
    },
    queryCache: new QueryCache({
        onError: (error: any) =>
            new Error(`Something went wrong: ${error.message}`),
    }),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <App />
            </Router>
        </QueryClientProvider>
    </React.StrictMode>
);
