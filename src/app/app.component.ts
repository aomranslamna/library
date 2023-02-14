import { Component } from '@angular/core';
import { LightmodeService } from './lightmode.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OrtBraudeLibrary';

  constructor(private lightmode:LightmodeService){}

  /* istanbul ignore next */
  lightMode() {
    if (this.lightmode.isDarkMode) {
      return {
        backgroundColor: 'gray',
        color: 'white'
        
        
        
      }
    } else {
      return {
        backgroundColor: 'white',
        color: 'black'
        
      }
    }
  }
  
}
