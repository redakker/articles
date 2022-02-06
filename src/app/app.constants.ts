import { HttpHeaders } from "@angular/common/http";

export const API_ENDPOINT = 'http://localhost:3000/api';

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
