import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ISupplier } from "../models/supplier.model";
import { Observable } from "rxjs";
const { services: { supplier } } = environment;

@Injectable({
    providedIn: "root",
})
export class SuppliersService {
    constructor(private http: HttpClient) { }

    get(params: { limit: number, offset: number } = { limit: 10, offset: 1 }): Observable<any> {
        return this.http.get<ISupplier>(`${supplier}`, { params });;
    }

    post(data: ISupplier) : Observable<any> {
        return this.http.post<ISupplier>(`${supplier}`, data);;
    }

    delete(id: string) : Observable<any> {
        return this.http.delete<ISupplier>(`${supplier}/${id}`);
    }
}