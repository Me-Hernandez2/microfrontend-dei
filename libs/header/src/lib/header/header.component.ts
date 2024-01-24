import { Component } from '@angular/core';
import {NgZorroComponentsModule} from "../../../../../app/shared/antd-module/ng-zorro-components.module";



@Component({
  selector: 'microfrontend-dei-header',
  standalone: true,
  imports: [NgZorroComponentsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
}
