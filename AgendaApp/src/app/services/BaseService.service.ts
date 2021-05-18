import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class BaseService {

    constructor() {}

    Endpoint(Method: string): string {
        return `${environment.endpointApi}/api/${Method}`;
    }
}