import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';

let inProcessing = false;

export default function Page_Home() {
    const navigate = useNavigate();

    useEffect(() => {
        // 画面表示時の処理]

        toast.info("画面表示");
    }, [])

    return (
        <>
            Home
        </>
    )
}
