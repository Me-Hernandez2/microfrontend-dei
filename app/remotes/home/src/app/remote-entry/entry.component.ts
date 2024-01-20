import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWelcome } from './home-welcome';

@Component({
  standalone: true,
  imports: [CommonModule, HomeWelcome],
  selector: 'microfrontend-dei-home-entry',
  template: `<home-welcome></home-welcome>`,
})
export class RemoteEntryComponent {}
