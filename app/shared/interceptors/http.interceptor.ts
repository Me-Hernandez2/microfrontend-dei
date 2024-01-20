import {HttpEventType, HttpInterceptorFn} from '@angular/common/http';
import {catchError, tap, throwError} from "rxjs";
import {inject} from "@angular/core";
import {NzMessageService} from "ng-zorro-antd/message";


export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  let messageService$ = inject(NzMessageService)
  const token = sessionStorage.getItem('token');

  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  })
  return next(authReq).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        //Logica para cuando sale la peticion bien
        console.log('interceptado')
      }
    }),
    catchError((error) => {
      if ([401, 403].includes(error.status)) {
        messageService$.create('error', `No estas autorizado, intenta logearte de nuevo`);
      }
      const e = error.error.message || error.statusText;
      messageService$.create('error', `Algo ha fallado en la peticion`);
      return throwError(() => error)
    })
  )
}
