import { ListItem } from './list-item'

export class List {

    name:string;
    status:boolean = false;
    items:ListItem[];

    constructor(name:string) {
        this.name = name;
    }
    
}