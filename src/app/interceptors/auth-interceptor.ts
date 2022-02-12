import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_ENDPOINT, TOKEN_NAME } from "../app.constants";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req.headers.append('Content-Type', 'application/json');

        const userToken = localStorage.getItem(TOKEN_NAME);
        if (this.isProtectedEP(req.url)) {
            if (userToken) {
                const cloned = req.clone({
                    headers: req.headers.set("Authorization", "Bearer " + userToken)
                });

                return next.handle(cloned);
            }
            else {
                return next.handle(req);
            }
        } else {
            return next.handle(req); 
        }
    }

    private isProtectedEP(url: string): boolean {

        let endpoint = url.replace(API_ENDPOINT, '');
        if (endpoint.includes('/login')) { return true; }
        if (endpoint.includes('/user')) { return true; }
        if (endpoint.includes('/profiles')) { return true; }
        if (endpoint.includes('/favorite')) { return true; }
        if (endpoint.includes('/comments')) { return true; }
        if (endpoint.includes('/articles')) { return true; }

        return false;
    }
}