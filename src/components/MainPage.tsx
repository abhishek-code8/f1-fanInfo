import React, { Component, useEffect, useState } from 'react'
import { methodType, requestMaker } from '../utils/requestMaker';
import { SeasonsApiResponse } from '../constants/types';
import { seasonObj } from '../constants/types';
import { SeasonsTab } from './SeasonsTab';


export const MainPage = () => {
    const [seasons, setSeasons] = useState<seasonObj[]>([]);

    useEffect(()=>{
        console.log("hello");
        requestMaker<SeasonsApiResponse>("seasons",methodType.GET).then((response) => setSeasons(response.data.results))
    }, []);

    useEffect(()=>{
        console.log("2nd useEffect");
    },[seasons]);
    return(
        <div>
            <SeasonsTab seasons={seasons}/>
        </div>
    )
}