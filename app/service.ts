import { Injectable } from "@angular/core";

export const DATA : any [] = [
    {value:"aaa",key:"bbbb"},
    {value:"aaa",key:"bbbb"},
    {value:"aaa",key:"bbbb"}
];


@Injectable()
export class Service {
    
    provideService(){
        return Promise.resolve(DATA);
    }

}