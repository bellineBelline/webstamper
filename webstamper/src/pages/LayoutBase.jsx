import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function LayoutBase() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // ページ遷移時に、スクロールを一番上まで戻す
        window.scrollTo(0, 0);
    }, [location])

    return (
        <div id='container_root'>
            <header id='container_header'>
                ヘッダ
            </header>
            <main id='container_main'>
                <Outlet />
            </main>
        </div>
    );
}