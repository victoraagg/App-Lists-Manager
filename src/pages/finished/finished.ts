import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListsService } from '../../services/lists.service';
import { ViewPage } from '../view/view';

@Component({
  selector: 'page-finished',
  templateUrl: 'finished.html'
})
export class FinishedPage {

  constructor(private _listService:ListsService, public navCtrl: NavController) {

  }

  viewList(index:number,list){
    this.navCtrl.push( ViewPage,{index,list} );
  }

}
