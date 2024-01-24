import {NgModule} from '@angular/core';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {httpInterceptor} from "../interceptors/http.interceptor";

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideHttpClient(withInterceptors([httpInterceptor]))
  ],
})
export class SharedModule { }
