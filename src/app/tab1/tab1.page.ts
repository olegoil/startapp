import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private _translate: TranslateService,
  ) {}

}
