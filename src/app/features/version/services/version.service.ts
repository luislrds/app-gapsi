import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICandidate } from "../../candidate/models/candidate.model";

const { services: { version } } = environment;

@Injectable()
export class VersionService {
    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get<{ version: string }>(`${version}`);
    }
}