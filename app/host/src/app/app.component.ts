import {Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";


@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  selector: 'microfrontend-dei-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'host';
}
