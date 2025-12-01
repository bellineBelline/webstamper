import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';

let inProcessing = false;

export default function Page_NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        // 画面表示時の処理]
    }, [])

    return (
        <>
            <div>
                指定されたページが見つかりませんでした。
                <Link to='/'>
                    戻る
                </Link>
            </div>
        </>
    )
}
