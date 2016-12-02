import { Component } from '@angular/core';
import './app.component.css';

@Component({
  selector: 'body',
  template: require('./app.component.html'),
  host: {'[class.light]':'!isDark',
		 '[class.dark]':'isDark'
		}
})

export class AppComponent {

	isDark = true;

	toggleContrast() {
		this.isDark = !this.isDark; 
	}

 }