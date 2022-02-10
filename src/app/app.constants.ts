import { HttpHeaders } from "@angular/common/http";

export const API_ENDPOINT = 'http://localhost:3000/api';
export const TOKEN_NAME = 'userToken';
export const OK_200 = 200;
export const OK_50 = 50; // Warning message

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
