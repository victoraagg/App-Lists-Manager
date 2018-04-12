import { Injectable } from '@angular/core';
import { List } from '../classes/list'

@Injectable()
export class ListsService {

  lists:List[] = [];

  constructor() {

  }

  storeLists(){
    localStorage.setItem( 'lists-app', JSON.stringify(this.lists) );
  }

  getLists(){
    if(localStorage.getItem('lists-app')){
      this.lists = JSON.parse(localStorage.getItem('lists-app'));
    }
    return this.lists;
  }

  addList(list:List){
    this.lists.push(list);
    this.storeLists();
  }

  deleteList(index:number){
    this.lists.splice(index,1);
    this.storeLists();
  }

}
