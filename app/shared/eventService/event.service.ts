import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventoEmitido = new Subject<string>();

  constructor() { }

  get getEvent$(): Observable<any> {
    return this.eventoEmitido.asObservable();
  }

  emitEvent(data: any) {
    this.eventoEmitido.next(data);
  }

}
