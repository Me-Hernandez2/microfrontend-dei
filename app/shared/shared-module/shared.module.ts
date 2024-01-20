import {importProvidersFrom, NgModule} from '@angular/core';
import {HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideAnimations} from "@angular/platform-browser/animations";
import {httpInterceptor} from "../interceptors/http.interceptor";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    provideHttpClient(withInterceptors([httpInterceptor]))
  ],
})
export class SharedModule { }
