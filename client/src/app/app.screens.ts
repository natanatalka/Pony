/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { 111 _PhonePortrait } from '../pages/111/PhonePortrait/111';
import { Name_PhonePortrait } from '../pages/Name/PhonePortrait/Name';
import { Screen_PhonePortrait } from '../pages/Screen/PhonePortrait/Screen';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    111 _PhonePortrait,
    Name_PhonePortrait,
    Screen_PhonePortrait
  ];
  static mapping = {
    '111': {
      PhonePortrait: 111 _PhonePortrait
    },
    'Name': {
      PhonePortrait: Name_PhonePortrait
    },
    'Screen': {
      PhonePortrait: Screen_PhonePortrait
    }
  }
}