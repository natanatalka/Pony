/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { 111 _PhonePortrait } from '../pages/111/PhonePortrait/111';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { 2222 _PhonePortrait } from '../pages/2222/PhonePortrait/2222';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    111 _PhonePortrait,
    Blank_PhonePortrait,
    2222 _PhonePortrait
  ];
  static mapping = {
    '111': {
      PhonePortrait: 111 _PhonePortrait
    },
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    '2222': {
      PhonePortrait: 2222 _PhonePortrait
    }
  }
}