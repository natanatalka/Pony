/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { 111 _PhonePortrait } from '../pages/111/PhonePortrait/111';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { 1111 _PhonePortrait } from '../pages/1111/PhonePortrait/1111';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    111 _PhonePortrait,
    Blank_PhonePortrait,
    1111 _PhonePortrait
  ];
  static mapping = {
    '111': {
      PhonePortrait: 111 _PhonePortrait
    },
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    '1111': {
      PhonePortrait: 1111 _PhonePortrait
    }
  }
}