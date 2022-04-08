import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { BundleProduct } from 'src/app/models/product.model';
import {Instance} from "../models/Instance";
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BundleServiceService {


  // url needs to be changed 
  bundlesUrlAdd = Instance.url + "/api/create/bundles";
  header = {};

  constructor(private http: HttpClient, tokenService: TokenStorageService ) {
    this.header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${tokenService.getToken()}`)
    }
  }
  createBundle(newBundle: any): Observable<BundleProduct> {
    return this.http.post<BundleProduct>(this.bundlesUrlAdd, newBundle, this.header);
}
}