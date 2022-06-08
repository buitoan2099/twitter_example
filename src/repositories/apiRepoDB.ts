import axios, { AxiosInstance, AxiosResponse } from "axios";
import Server from "../configs/server";

export abstract class ApiRepoDB {
    protected readonly instance: AxiosInstance;

    constructor() {
        let baseURL = Server.API_URL_DB;
        this.instance = axios.create({
            baseURL,
        });
        this.initializeResponseInterceptor();
    }

    initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this.handleResponse,
            this.handleError,
        );
    };

    private handleResponse = ({ data }: AxiosResponse) => {
        return data;
    };

    private handleError = (error: any) => Promise.reject(error);
}