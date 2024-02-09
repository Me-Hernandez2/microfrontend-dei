import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroComponentsModule} from "../../../../../../../shared/antd-module/ng-zorro-components.module";
import {FormsModule} from "@angular/forms";
import {TestComunicacionComponent} from "../../../../../../testEvents/src/app/remote-entry/components/testComunicacion/testComunicacion.component";

@Component({
  selector: 'microfrontend-dei-revision-detecciones',
  standalone: true,
  imports: [CommonModule, FormsModule, NgZorroComponentsModule, TestComunicacionComponent],
  templateUrl: './revision-detecciones.component.html',
  styleUrl: './revision-detecciones.component.sass',
})

export class RevisionDeteccionesComponent implements OnInit {


  // Array de URLs de imágenes
  images: string[] = [
    '../../assets/images/prueba-1.jpg',
    '../../assets/images/prueba-2.jpg',
    '../../assets/images/prueba-3.jpg',
    '../../assets/images/prueba-4.jpg',
    '../../assets/images/prueba-5.jpg',
    '../../assets/images/prueba-6.jpg',
    // Agrega más URLs de imágenes aquí
  ];
  valorInput: string = 'DDL081';
  radioValue: string = '';
  mostrarBotonAceptar: boolean = true;
  mostrarItem: boolean = false;
  mostrarObservacionesSi: boolean = false;
  mostrarObservacionesNo: boolean = false;
  selectedValue = null;


  // Método llamado al cambiar el valor del radio
  onRadioChange() {
    // Oculta el botón si el valor del radio es 'si' o 'no'
    this.mostrarBotonAceptar = this.radioValue !== 'si' && this.radioValue !== 'no';

    // Establece la visibilidad de observaciones-content y sus contenidos específicos
    this.mostrarItem = this.radioValue === 'si' || this.radioValue === 'no';
    this.mostrarObservacionesSi = this.radioValue === 'no';
    this.mostrarObservacionesNo = this.radioValue === 'si';
  }

  // Método llamado al iniciar el componente
  ngOnInit(): void {
    // Deshabilita prev inicialmente
    this.disablePrevNav = true;
    this.checkNavigationLimits();
  }

  // Cantidad máxima de imágenes a mostrar
  maxVisibleImages: number = 3;

  // Imágenes visibles actualmente
  visibleImages: string[] = this.images.slice(0, this.maxVisibleImages);

  // Imagen activa y posición actual en el array
  activeImage: string = this.images[0];
  currentIndex: number = 0;

  // Estados para deshabilitar las flechas de navegación
  disablePrevNav: boolean = false;
  disableNextNav: boolean = false;

  // Establece la imagen activa y actualiza las imágenes visibles
  setActiveImage(image: string, index: number): void {
    const actualIndex = Math.min(index, this.images.length - 1);
    this.activeImage = this.images[actualIndex];
    this.currentIndex = actualIndex;
    this.updateVisibleImages();
  }

  // Método para avanzar a la siguiente imagen
  nextSlide(): void {
    if (!this.disableNextNav) {
      this.currentIndex = (this.currentIndex + 3) % this.images.length;
      this.activeImage = this.images[this.currentIndex];
      this.updateVisibleImages();

      // Deshabilita next si alcanzamos la última imagen
      this.disableNextNav = this.currentIndex === this.images.length - 1;

      this.disablePrevNav = false;
    }
  }

  // Método para retroceder a la imagen anterior
  prevSlide(): void {
    if (!this.disablePrevNav) {
      this.currentIndex = (this.currentIndex - 3 + this.images.length) % this.images.length;

      this.activeImage = this.images[this.currentIndex];
      this.updateVisibleImages();

      this.disablePrevNav = this.currentIndex === 0;

      this.disableNextNav = !this.disablePrevNav;
    }
  }

  // Verifica y actualiza el estado de deshabilitación de las flechas de navegación
  private checkNavigationLimits(): void {
    const totalGroups = Math.ceil(this.images.length / this.maxVisibleImages);
    const currentGroup = Math.floor(this.currentIndex / this.maxVisibleImages);

    // Deshabilita la flecha izquierda si estás en la primera imagen
    this.disablePrevNav = this.currentIndex === 0;

    // Deshabilita la flecha derecha si estás en el último grupo y en la última imagen
    this.disableNextNav = currentGroup === totalGroups - 1 && (this.currentIndex + this.maxVisibleImages) >= this.images.length;

    // Si desactivamos la flecha derecha, asegurémonos de que la posición sea la última imagen
    if (this.disableNextNav) {
      this.currentIndex = this.images.length - 1;
      this.updateVisibleImages();
    }
  }

  // Actualiza las imágenes visibles
  private updateVisibleImages(): void {
    const start = this.currentIndex;
    const end = (start + this.maxVisibleImages) % this.images.length;

    // Ajusta la selección para incluir las últimas imágenes
    this.visibleImages = end >= start
      ? this.images.slice(start, end)
      : [...this.images.slice(start), ...this.images.slice(0, end)];

    // Ajusta currentIndex para quedarse en la última imagen cuando llegas al final
    if (this.currentIndex === this.images.length - 1) {
      this.currentIndex = this.images.length - this.maxVisibleImages;
    } else {
      // Ajusta currentIndex para mostrar siempre la primera imagen en el grupo de imágenes visibles
      this.currentIndex = start % this.images.length;
    }
  }

  // Obtiene grupos de puntos para indicadores
  getDotGroups(): number[] {
    const totalGroups = Math.ceil(this.images.length / this.maxVisibleImages);
    return Array.from({ length: totalGroups }, (_, i) => i);
  }

  // Establece la imagen activa en un grupo específico
  setActiveImageInGroup(groupIndex: number): void {
    const startIndex = groupIndex * this.maxVisibleImages;
    this.setActiveImage(this.images[startIndex], startIndex);
  }
}
