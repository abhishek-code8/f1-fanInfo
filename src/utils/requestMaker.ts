import axios from "axios";

export enum methodType {
    "GET",
    "POST",
}

const baseUrl = "http://localhost:3000/";

export const requestMaker = <T>(url: string,method: methodType) => {
    const me = method === methodType.GET?"GET":"POST";
    return axios.request<T>({
        method: me,
        url: baseUrl+url,
        // headers: {
        //     'X-RapidAPI-Key': 'key',
        //     'X-RapidAPI-Host': 'f1-live-motorsport-data.p.rapidapi.com'
        // }
    });
};



const requestMakerReal = <T>(endpoint:string, method: methodType) => {
    const me = method === methodType.GET?"GET":"POST";
    return axios.request
}