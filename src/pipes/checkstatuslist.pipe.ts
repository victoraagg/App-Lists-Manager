import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/list';

@Pipe({
  name: 'checkstatuslist',
  pure: false
})
export class CheckStatusListPipe implements PipeTransform {

  transform(  lists:List[],status:boolean ): any {
    let newList:List[] = [];
    if(lists.length > 0){
      for(let list of lists){
        if(list.status == status){
          newList.push(list);
        }
      }
    }
    return newList;
  }

}
