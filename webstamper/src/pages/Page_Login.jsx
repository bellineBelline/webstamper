import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

let inProcessing = false;

export default function Page_Login() {
    const navigate = useNavigate();

    useEffect(() => {
        // 画面表示時の処理
    }, [])

    return (
        <>
            <input id='hogehoge' />
        </>
    )
}
