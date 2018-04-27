import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Wallet } from '../../data/wallets.interface';
import wallets from '../../data/wallets';
import { WalletPage } from '../wallet/wallet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  walletCollection: Wallet[];
  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.walletCollection = wallets;
  }

  openWalletDetails(wallet: Wallet) {
    this.navCtrl.push(WalletPage, wallet);
  }
}
