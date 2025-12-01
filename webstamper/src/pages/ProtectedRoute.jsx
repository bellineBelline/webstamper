import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../components/ContextLoading";

/**
 * 画面遷移チェッカー
 */
export default function ProtectedRoute() {
    const inProcessing = useRef(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {withLoading} = useLoading();

    useEffect(() => {
        if (inProcessing.current) {
            // 多重起動防止
        };
        inProcessing.current = true;

        console.log('useEffect: ProtectedRoute');

        withLoading(async () => {

            inProcessing.current = false;
        });        
    }, [])

    useEffect(() => {
        // ページ遷移時に、スクロールを一番上まで戻す
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>
            <Outlet />
        </>
    );
}