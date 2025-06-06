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

  whatsapp(event: MouseEvent): void {
  event.preventDefault(); // evita comportamento padrão
  const numero = '5548933804333'; // número com DDI + DDD (corrigido com 55)
  const mensagem = encodeURIComponent('Olá! Gostaria de mais informações.');
  const url = `https://wa.me/${numero}?text=${mensagem}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

  @ViewChild('menu') menu!: ElementRef;

  roll() {
    this.menu.nativeElement.scrollIntoView({ behavior: 'smooth'});
  }
}