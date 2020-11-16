import { Injectable } from '@angular/core';
import Config from '../config';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor() {
    Config.getBaseUrl();
  }
}
