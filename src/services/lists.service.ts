import { Injectable } from '@angular/core';
import { List } from '../classes/list'

@Injectable()
export class ListsService {

  lists:List[] = []

  constructor() {
    console.log('Service list on');
  }

}
