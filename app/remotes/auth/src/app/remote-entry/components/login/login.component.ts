import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroComponentsModule} from "../../../../../../../shared/antd-module/ng-zorro-components.module";
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "./services/login.service";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../../../../../../../shared/shared-module/shared.module";


@Component({
  selector: 'microfrontend-dei-login',
  standalone: true,
  imports: [CommonModule,
    NgZorroComponentsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    LoginService,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: NonNullableFormBuilder,
              private router: Router,
              private loginService$: LoginService
  ) {
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const request: any = {
        username: this.validateForm.get('userName')!.value,
        password: this.validateForm.get('password')!.value
      }
      //AQUI DEJO EL LOGEO FALSO CON LA API DE PRUEBA, ES UNA SIMULACION CON PETICION
      if (request.username == 'test@gmail.com' && request.password == '1234') {
        this.sendLogin();
      } else {
        alert("Usuario no existe")
      }

    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  sendLogin() {
    this.loginService$.login().subscribe((res: any) => {
      if (!!res.name) {
        sessionStorage.setItem('token', res.name);
        this.router.navigate(['deii'])
      } else {
        alert("error de logueo")
      }
    })
  }
}
