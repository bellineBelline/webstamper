import React from 'react';
import '../styles/Spinner.css';

export default function Spinner() {
    return (
        <div className='spinner_overlay'>
            <div className='spinner'></div>
        </div>
    );
}