import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-section-5',
  imports: [CommonModule],
  templateUrl: './section-5.component.html',
  styleUrl: './section-5.component.css',
})
export class Section5Component {
  selectedCategory: string = 'All';

  selectedChallente: any = null;
  modalOpen: boolean = false;

  openModal(challenge: any): void {
    this.selectedChallente = challenge;
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
    this.selectedChallente = null;
  }

  selectedImage: string | null = null;
  imageModalOpen: boolean = false;

  openImageModal(image: string): void {
    this.selectedImage = image;
    this.imageModalOpen = true;
  }

  closeImageModal(): void {
    this.imageModalOpen = false;
    this.selectedImage = null;
  }

  challenges = [
    {
      title: 'Weather API',
      category: 'Frontend',
      thumbnail: './assets/weather_api/weather_api.png',
      description: 'Uma API de previsão do tempo consumida por um site simples',
      // linkvercel: 'https://frontend-html-glamour.vercel.app/',
      linkgithub: 'https://github.com/codariadev/desafio-st1.git',
      challengeLink: 'https://github.com/1STi/desafio-frontend.git ',

      gallery: [
        './assets/weather_api/weather_api.png',
        './assets/weather_api/weather_api2.png',
        './assets/weather_api/weather_api_mobile.png',
        './assets/weather_api/weather_api_mobile2.png',
      ],

      company: 'ST1',
      companyLink: 'https://www.1sti.com.br/',
      companyResume:
        ' A 1STi é uma consultoria em tecnologias digitais emergentes que tem a missão de aproximar a tecnologia das reais necessidades sociais. Nós enxergamos a tecnologia como um presente à humanidade dado pela expressão de nosso próprio intelecto, realizando uma síntese entre arte, humanidade e ciência. Nosso modelo de negócios combina projetos de valor compartilhado com consultoria nas tecnologias mais avançadas. Esse desafio é uma oportunidade para fazer parte do nosso time em uma jornada de aprendizado e desenvolvimento de interfaces web!',
      challenge:
        'Vamos dar uma olhada na previsão do tempo? A meta é criarmos uma página simples, que consuma a API do Yahoo de previsão do tempo (https://developer.yahoo.com/weather/). O layout final deverá ficar o mais próximo possível da versão abaixo (sim, vamos ter a versão responsiva mobile e a versão desktop):',
      challengeRequire:
        'Tudo bem, até pode usar jquery. Se você não quiser usar (bônus), uma sugestão: Axios para a comunicação com a API.\nHTML o mais semântico possível.\nBranches com readme e instruções de implantação serão bem vindos.\nPré-processadores CSS como Stylus ou LESS também.\nQue tal utilizar BEM nos identificadores css? http://getbem.com/naming/',
      challengeObs:
      '* Api utilizada do Yahoo Weather foi descontinuada, portanto o desafio foi adaptado para consumir a API do Free Weather Api Trial Version (https://www.weatherapi.com/).',
    },
  ];

  get filteredChallenges() {
    if (this.selectedCategory === 'All') {
      return this.challenges;
    }
    return this.challenges.filter((p) => p.category === this.selectedCategory);
  }

  setCategory(category: string) {
    console.log('Clicou em:', category);
    this.selectedCategory = category;
  }

  get categories(): string[] {
    const allCategories = this.challenges.map((p) => p.category);
    const uniqueCategories = Array.from(new Set(allCategories));
    return ['All', ...uniqueCategories];
  }
}
