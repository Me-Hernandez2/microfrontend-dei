import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FooterComponent} from "@microfrontend-dei/footer";
import {HeaderComponent} from "@microfrontend-dei/header";
import {SidebarComponent} from "@microfrontend-dei/sidebar";
import {SubheaderComponent} from "@microfrontend-dei/subheader";

@Component({
  selector: 'microfrontend-dei-home-deii',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent,SidebarComponent, SubheaderComponent],
  templateUrl: './homeDeii.component.html',
  styleUrl: './homeDeii.component.sass',
})
export class HomeDeiiComponent {}
