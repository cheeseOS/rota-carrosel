import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [
    IonButton
  ],
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss'],
})
export class CompComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  navigateToTab(tab: string) {
    this.navCtrl.navigateRoot(`/tabs/${tab}`);
  }
  navigateTo(tab: string) {
    this.navCtrl.navigateRoot(`/${tab}`);
  }

}
