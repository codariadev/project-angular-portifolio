import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-section-4',
  imports: [CommonModule],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.css'
})
export class Section4Component {
  selectedCategory: string = 'All';

  projects = [
    { title: 'Glamour HTML',
      category: 'HTML',
      thumbnail: 'https://raw.githubusercontent.com/codariadev/frontend-html-glamour/refs/heads/main/thumbnail.png',
      description: 'Um site básico para salões de beleza',
      linkvercel: 'https://frontend-html-glamour.vercel.app/',
      linkgithub: 'https://github.com/codariadev/frontend-html-glamour'
    },
    { title: 'Gerador de Curriculo',
      category: 'Angular',
      thumbnail: 'https://raw.githubusercontent.com/codariadev/curriculo-builder/refs/heads/main/thumbnail.png',
      description: 'Com dois templates simples, direto ao ponto!',
      linkvercel: 'https://curriculo-builder.vercel.app/',
      linkgithub: 'https://github.com/codariadev/curriculo-builder.git'
    },
    { title: 'App de orçamentos para pinturas (Em desenvolvimento)',
      category: 'React Native',
      thumbnail: 'https://raw.githubusercontent.com/codariadev/pintura-app/refs/heads/master/WhatsApp%20Image%202025-07-19%20at%2012.28.11.jpeg',
      description: 'Aplicativo mobile para orçamentos e gestão de serviços de pintura, desenvolvido com React Native, Expo e Firebase.',
      linkvercel: 'https://github.com/codariadev/pintura-app.git',
      linkgithub: 'https://github.com/codariadev/pintura-app.git'
    },

  ];

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string) {
  console.log('Clicou em:', category);
  this.selectedCategory = category;
}


  get categories(): string[] {
    const allCategories = this.projects.map(p => p.category);
    const uniqueCategories = Array.from(new Set(allCategories));
    return ['All', ...uniqueCategories];
  }
}
