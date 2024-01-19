import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'microfrontend-dei-auth-entry',
  template: `<microfrontend-dei-nx-welcome></microfrontend-dei-nx-welcome>`,
})
export class RemoteEntryComponent {}
