"use client";

import axios from 'axios';
import style from './content.module.css'
import { useState } from 'react';

export default function Content() {
    const [id, setId ] = useState('');
    const [url, setUrl] = useState('');
    const clickBtn = async () => {
        const { data } = await axios.get('https://api.thecatapi.com/v1/images/search');
        if (data.length> 0) {
            setId(data[0].id);
            setUrl(data[0].url);
        } else {
            console.error('에러!!');
        }
    }
    return (
        <div className={style.container}>
            <div className={style.btnWrap}>
                <button className={style.btn} type='button' onClick={clickBtn}>
                    <span>
                        클릭하면 엄청난 것이 있따
                    </span>
                </button>
            </div>
            <div>
                <img className={style.cat} src={url} alt="" />
            </div>
        </div>
    )
}