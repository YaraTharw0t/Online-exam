import { Auth, AuthResponse } from "./auth";

export interface Adaptor {

    adapt(data:Auth):AuthResponse
}


