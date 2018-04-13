import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { List } from '../../classes/list';
import { ListItem } from '../../classes/list-item';
import { ListsService } from '../../services/lists.service';

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {

  list:List;
  index:number;
  allChecked:boolean = true;

  constructor( 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public _listService: ListsService 
  ) {
    this.list = navParams.get('list');
    this.index = navParams.get('index');
  }

  updateItem(index:number, item:ListItem){    
    item.status = !item.status;
    this._listService.lists[this.index].items[index] = item;
    this.checkAllItems();
    this._listService.storeLists();
  }

  checkAllItems(){ 
    let allChecked:boolean = true;   
    for(let item of this._listService.lists[this.index].items){
      if(!item.status){
        allChecked = false;
        break;
      }
    }
    this._listService.lists[this.index].status = allChecked;
  }

  deleteList(){
    let confirm = this.alertCtrl.create({
      title: `¿Borrar la lista ${this.list.name}?`,
      message: 'Este evento ya no se podrá deshacer',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this._listService.deleteList(this.index);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
