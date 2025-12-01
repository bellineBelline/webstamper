import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page_Home from './pages/Page_Home';
import Page_Login from './pages/Page_Login';
import Page_NotFound from './pages/Page_NotFound';
import { ProviderLoading, useLoading } from './components/ContextLoading';
import env from './config/accessor_env.js';
import LayoutBase from './pages/LayoutBase';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import Spinner from './components/Spinner.jsx';

export default function App() {
    console.log(env.MODE);
    console.log(env);
    return (
        <>
            <ProviderLoading>
				<Router>
					<AppRoutes />
				</Router>
            </ProviderLoading>
            <ToastContainer />
        </>
    )
}


function AppRoutes() {
	const {isLoading} = useLoading();

    return (
        <>
			{ isLoading && <Spinner />}
			<Routes>
				<Route path='/login'>
					<Route index element={<Page_Login />} />
				</Route>
				<Route path='/' element={<ProtectedRoute />}>
					<Route path='/' element={<LayoutBase />} />
					<Route index element={<Page_Home />} />
				</Route>
				<Route path='*' element={<Page_NotFound />} />
			</Routes>
        </>
    );
}