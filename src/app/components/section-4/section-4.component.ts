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
      description: 'Um site básico',
      linkvercel: 'https://frontend-html-glamour.vercel.app/',
      linkgithub: 'https://github.com/codariadev/frontend-html-glamour'
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