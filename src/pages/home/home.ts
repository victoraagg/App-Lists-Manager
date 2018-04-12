import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListsService } from '../../services/lists.service';
import { AddPage } from '../add/add';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private _listService:ListsService, public navCtrl: NavController) {

  }

  private addList(){
    this.navCtrl.push(AddPage);
  }

  viewList(index:number,list){
    this.navCtrl.push( ViewPage,{index,list} );
  }

}
