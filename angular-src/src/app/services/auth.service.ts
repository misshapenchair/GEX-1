// By Roni
// Buyer and seller, login services
import { Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { runInThisContext } from 'vm';
import { EventEmitter } from 'protractor';

@Injectable()
export class AuthService {
  RegisterToken: any;
  buyer: any;
  seller: any;
  user: String;

  constructor(private http: HttpClient) { }

  // Buyer Authenticate Service
  AuthenticateBuyer(buyer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('buyers/login', buyer, httpOptions)
    .pipe(map(res => res));
  }

  // Seller Authenticate Service
  AuthenticateSeller(seller) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post('sellers/login', seller, httpOptions)
    .pipe(map(res => res));
  }
}
