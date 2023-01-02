import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showButton: boolean = false;
  toggleDiv:boolean = false;

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  getButtonClass() {
    return this.showButton ? 'showbtn' : '';
  }
  getHeaderClass(){
    return !this.showButton ? 'main-header' : 'fixed-header';
  }
  showToggleDiv(){
    this.toggleDiv = !this.toggleDiv;
  }
  getConditionalClass(){
    return !this.toggleDiv ? 'toggle-header-div' : "show-toggle-header-div"
  }
}
