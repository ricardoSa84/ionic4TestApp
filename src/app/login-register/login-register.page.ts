import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service'


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {

  public email:any;
  public password:any;
  
  constructor(private restService: RestService) {
   }

  ngOnInit() {
  }

  doLogin(){
    var data = {
      email: this.email,
      password: this.password
    }
    this.restService.callLogin(data).then(response => {
      console.log(response)
    })
  }
}
