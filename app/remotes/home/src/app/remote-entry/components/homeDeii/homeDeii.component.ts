import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FooterComponent} from "@microfrontend-dei/footer";
import {HeaderComponent} from "@microfrontend-dei/header";
import {SidebarComponent} from "@microfrontend-dei/sidebar";
import {SubheaderComponent} from "@microfrontend-dei/subheader";
import {RevisionDeteccionesComponent} from "../../../../../../gestionar-detecciones/src/app/remote-entry/components/revision-detecciones/revision-detecciones.component";

@Component({
  selector: 'microfrontend-dei-home-deii',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SubheaderComponent,
   // RevisionDeteccionesComponent //SE PONE EL COMPONENTE DE REVISIONES PROVISIONALMENTE, SE TRABAJA EN UNA SOLUCION PARA LAS RUTAS HIJAS
  ],
  templateUrl: './homeDeii.component.html',
  styleUrl: './homeDeii.component.sass',
})
export class HomeDeiiComponent {}
