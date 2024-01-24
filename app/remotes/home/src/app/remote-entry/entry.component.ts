import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeDeiiComponent} from "./components/homeDeii/homeDeii.component";


@Component({
  standalone: true,
  imports: [CommonModule, HomeDeiiComponent],
  selector: 'microfrontend-dei-home-entry',
  template: `<microfrontend-dei-home-deii></microfrontend-dei-home-deii>`,
})
export class RemoteEntryComponent {}
