import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestComunicacionComponent} from "./components/testComunicacion/testComunicacion.component";

@Component({
  standalone: true,
  imports: [CommonModule, TestComunicacionComponent],
  selector: 'microfrontend-dei-event-entry',
  template: `<microfrontend-dei-test-comunicacion></microfrontend-dei-test-comunicacion>`,
})
export class RemoteEntryComponent {}
