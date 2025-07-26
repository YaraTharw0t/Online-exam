import { Auth } from "./auth";

export interface Adaptor {

    adapt(data:Auth):any
}


