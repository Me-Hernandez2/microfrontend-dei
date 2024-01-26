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
