import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListsService } from '../../services/lists.service';
import { AddPage } from '../add/add';

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

}
