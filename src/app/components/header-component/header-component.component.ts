import { Component, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  menuAtivo: boolean = false;

  whatsapp() {
    window.open('https://wa.me/+5548933804333', '_blank');
  }
  

  toggleMenu() {
    this.menuAtivo = !this.menuAtivo;
    console.log('Menu ativo:', this.menuAtivo);
  }

  fecharMenu(destino: string) {
    this.menuAtivo = false;

    const elemento= document.getElementById(destino);
    if (elemento) {
      setTimeout(() => {
        elemento.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }

  @ViewChild('menu') menu!: ElementRef;

  roll() {
    this.menu.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }
}