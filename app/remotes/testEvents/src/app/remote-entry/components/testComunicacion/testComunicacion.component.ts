import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventService} from "../../../../../../../shared/eventService/event.service";

@Component({
  selector: 'microfrontend-dei-test-comunicacion',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './testComunicacion.component.html',
  styleUrl: './testComunicacion.component.css',
})
export class TestComunicacionComponent implements OnInit {
  datoRecibido = 0;
  eventService$ = inject(EventService);

  ngOnInit(): void {
    this.eventService$.getEvent$.subscribe( (data: number) => {
      this.datoRecibido = data;
    })
  }
}
