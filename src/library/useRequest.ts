import useSWR from 'swr';
import {ResultModel} from "../models/ResultModel";
import axios from "axios";

interface DataPayload<T> {
    [key: string]: T;
}

const request = () => {

}

const getFetcher = (url: string) => axios.get(url).then((response) => response.data);
const postFetcher = (url: string) => axios.post(url).then((response) => response.data);

const useGetRequest = <T>(url: string, key: string): ResultModel<T> => {
    const {data: payload, error} = useSWR<DataPayload<T>>(url, getFetcher);
    const Result = payload ? payload[key] : undefined;
    return {
        Result,
        Success: !error,
    };
}

const usePostRequest = <T>(url: string, key: string): ResultModel<T> => {
    const {data: payload, error} = useSWR<DataPayload<T>>(url, postFetcher);
    const Result = payload ? payload[key] : undefined;
    return {
        Result,
        Success: !error,
    };
}

export default request;