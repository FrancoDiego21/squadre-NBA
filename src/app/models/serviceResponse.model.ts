import { Teams } from "./teams.model";
export class serviceResponse{
    data : Teams[];

    constructor(data : Teams[]){
        this.data = data;
        
    }
}