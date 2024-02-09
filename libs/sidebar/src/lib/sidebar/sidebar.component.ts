import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroComponentsModule} from "../../../../../app/shared/antd-module/ng-zorro-components.module";
import {RouterLink} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'microfrontend-dei-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, NgZorroComponentsModule, HttpClientModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.sass',
})
export class SidebarComponent {

  activeSubMenu: number | null = null;
  menuItems = [
    {
      id: "gestionarDetecciones",
      title: "Gestionar detecciones",
      activeSubMenu: 1,
      items: [
        { name: "Revisión de detecciones", route: "/detecciones" },
        { name: "Completar datos", route: "/" },
        { name: "Verificar datos", route: "/" },
        { name: "Visualización de detecciones", route: "/" },
        { name: "Reasignar procesos", route: "/" },
        { name: "Auditar detecciones", route: "/" },
        { name: "Anular detecciones pico y placa", route: "/" },
        { name: "Administrar exentos", route: "/" }
      ]
    },
    {
      id: "gestionarInfracciones",
      title: "Gestionar infracciones",
      activeSubMenu: 2,
      items: [
        { name: "Registrar notificación", route: "/" },
        { name: "Revisar comparendos", route: "/" },
        { name: "Registrar correspondencia", route: "/" },
        { name: "Gestionar anulación de comparendos", route: "/" },
        { name: "Imprimir documentos", route: "/" },
        { name: "Enviar correspondencia", route: "/" },
        { name: "Aprobación y firma de comparendos", route: "/" },
        { name: "Firma digital de documentos", route: "/" },
        { name: "Cambiar implicado", route: "/" },
        { name: "Generar oficios por Secretaría", route: "/" }
      ]
    },
    {
      id: "reportes",
      title: "Reportes",
      activeSubMenu: 3,
      items: [
        { name: "Consultar detecciones", route: "/" },
        { name: "Consultar proceso detecciones", route: "/" },
        { name: "Consultar detecciones anuladas por imágenes", route: "/" },
        { name: "Consultar detecciones anuladas", route: "/" },
        { name: "Consultar correspondencia", route: "/" },
        { name: "Consultar implicado", route: "/" },
        { name: "Generar reportes", route: "/" }
      ]
    },
    {
      id: "administracion",
      title: "Administración",
      activeSubMenu: 4,
      items: [
        { name: "Administrar catálogos", route: "/" },
        { name: "Consultar resultado procesamiento", route: "/" },
        { name: "Administrar cámaras", route: "/" },
        { name: "Administrar parámetros", route: "/" },
        { name: "Administrar validaciones", route: "/" },
        { name: "Consultar logs", route: "/" },
        { name: "Administrar estados notificación", route: "/" },
        { name: "Administrar tipo de anulaciones", route: "/" },
        { name: "Administrar empresas transportadoras", route: "/" },
        { name: "Administrar empresas leasing", route: "/" },
        { name: "Administrar configuración de pico y placa", route: "/" }
      ]
    },
    {
      id: "seguridadAuditoria",
      title: "Seguridad y auditoría",
      activeSubMenu: 5,
      items: [
        { name: "Administrar perfiles", route: "/" },
        { name: "Administrar usuarios", route: "/" },
        { name: "Auditoría", route: "/" }
      ]
    }
  ];




  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event): void {
    const clickedElement = event.target as HTMLElement;

    // Verificar si el clic fue dentro de un .sidebar-item
    const clickedInsideSidebarItem = clickedElement.closest('.sidebar-item') !== null;

    // Si no fue dentro de un .sidebar-item, quitar la clase .active
    if (!clickedInsideSidebarItem) {
      this.activeSubMenu = null;
    }
  }

  toggleSubMenu(num: number): void {
    this.activeSubMenu = this.activeSubMenu === num ? null : num;
  }
}
