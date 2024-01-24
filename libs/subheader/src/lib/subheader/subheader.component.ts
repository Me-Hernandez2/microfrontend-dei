import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroComponentsModule} from "../../../../../app/shared/antd-module/ng-zorro-components.module";

@Component({
  selector: 'microfrontend-dei-subheader',
  standalone: true,
  imports: [CommonModule, NgZorroComponentsModule],
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.sass',
})
export class SubheaderComponent {}
