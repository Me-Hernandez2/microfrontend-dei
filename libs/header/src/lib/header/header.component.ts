import {Component, inject} from '@angular/core';
import {NgZorroComponentsModule} from "../../../../../app/shared/antd-module/ng-zorro-components.module";
import {EventService} from "../../../../../app/shared/eventService/event.service";



@Component({
  selector: 'microfrontend-dei-header',
  standalone: true,
  imports: [NgZorroComponentsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  numeroInicial = 0;
  eventService$ = inject(EventService);


  //Emitir evento de prueba de comunicacion entre modulos
  emitEvent(){
    this.numeroInicial = this.numeroInicial + 1;
    this.eventService$.emitEvent(this.numeroInicial)
  }
}
