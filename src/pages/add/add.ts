import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { List } from '../../classes/list';
import { ListItem } from '../../classes/list-item';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  nameList:string = "";
  nameItem:string = "";
  items:ListItem[] = [];

  constructor( public navCtrl: NavController, public alertCtrl: AlertController, public _listService: ListsService ) {

  }

  addItem(){
    if(this.nameItem.length == 0){
      return;
    }
    let item:ListItem = new ListItem();
    item.name = this.nameItem;
    this.items.push(item);
    this.nameItem = "";
  }

  removeItem(index:number){
    this.items.splice(index,1);
  }

  saveList(){
    if(this.nameList.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Nombre de lista vacío',
        subTitle: 'Es necesario introducir un nombre para guardar la lista',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let list = new List(this.nameList);
    list.items = this.items;
    this._listService.addList(list);

    this.navCtrl.pop();

  }

}
