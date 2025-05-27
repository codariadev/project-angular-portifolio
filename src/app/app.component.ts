import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { Section1Component } from './components/section-1/section-1.component';
import { Section2Component } from './components/section-2/section-2.component';
import { Section3Component } from './components/section-3/section-3.component';
import { Section4Component } from './components/section-4/section-4.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponentComponent, Section1Component, Section2Component, Section3Component, Section4Component, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Lucas Eduardo - Portfolio';

  ngOnInit() {
    this.setRealHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.setRealHeight();
  }

  private setRealHeight() {
    if (typeof window !== 'undefined') {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }
}