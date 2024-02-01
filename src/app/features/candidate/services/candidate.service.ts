import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ICandidate } from "../models/candidate.model";
import { Observable } from "rxjs";
const { services: { candidate } } = environment;

@Injectable()
export class CandidateService {
    constructor(private http: HttpClient) { }

    get(id: string): Observable<any> {
        return this.http.get<ICandidate>(`${candidate}/${id}`);
    }
}