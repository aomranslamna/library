import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightmodeService {

  isDarkMode : boolean = false;

  constructor() { }
}
