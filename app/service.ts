import { Injectable } from "@angular/core";

export const DATA : any [] = [
    {value:"Python",key:"0"},
    {value:"C++",key:"1"},
    {value:"Dart",key:"2"}
];


@Injectable()
export class Service {
    
    provideService(){
        return Promise.resolve(DATA);
    }

}