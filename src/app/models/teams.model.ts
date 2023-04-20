export class Teams{
    public id : number;
    public abbreviation : String;
    public city : String;
    public conference : String;
    public division : String;
    public full_name : String;
    public name : String;

    constructor(id:number, abbreviation: string, city:string, conference:string, division:string, full_name:string, name:string){
        this.id = id;
        this.abbreviation = abbreviation;
        this.city = city;
        this.conference = conference;
        this.division = division;
        this.full_name = full_name;
        this.name = name;
        
    }
    
}