import {DoctorScheduleType, SigninInputsType, SignupInputsType} from "../types";

export default class Service {
    private baseUrl = 'http://localhost:3001/api';

    private headers = {
        'Content-Type': 'application/json',
    };

    public getData = async (method: string, headers: any, data: any, address: string) => {
        return await fetch(`${this.baseUrl}${address}`, {
            method,
            headers,
            body: JSON.stringify(data)
        });
    };

    public postRequest = async (data: PostRequestDataType, address: string): Promise<any> => {
        const headers = {
            'Content-Type': 'application/json',
        };
        let response = await this.getData('POST', headers, data, address);
        if (response.ok) {
            //return error
        }
        return await response.json();
    };

    public getRequest = async (token: string | null, address: string): Promise<any>  => {
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        let response = await this.getData('GET', headers, undefined, address);
        if (response.ok) {
            //return error
        }
        return await response.json();
    }
}

type PostRequestDataType = SigninInputsType | SignupInputsType | DoctorScheduleType