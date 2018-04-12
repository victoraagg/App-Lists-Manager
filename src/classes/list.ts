import { ListItem } from './list-item'

export class List {

    name:string;
    status:string;
    items:ListItem[];

    constructor(name:string) {
        this.name = name;
    }
    
}