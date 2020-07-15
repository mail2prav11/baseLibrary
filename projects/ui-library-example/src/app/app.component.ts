import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-library-example';
  toggleSidenav(e){
    e.preventDefault()
    $(".page-holder").toggleClass("closed");
  }
}
