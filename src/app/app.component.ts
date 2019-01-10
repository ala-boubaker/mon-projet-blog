import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-blog';

  posts = [
    {
      title:'Mon premier post',
      content:'OpenClassrooms est une école en ligne qui propose à ses membres des cours certifiants et des parcours débouchant sur un métier d\'avenir,' +
        ' réalisés en interne, par des écoles, des universités.',
      loveIts:0,
      created_at:new Date()
    },
    {
      title:'Mon deuxième post',
      content:'Angular (communément appelé "Angular 2+" ou "Angular v2 et plus") 2,3 est un cadriciel (framework) coté client open source basé sur TypeScript dirigée par l\'équipe du projet Angular à Google et par une communauté de particuliers et de sociétés. ' +
        'Angular est une réécriture complète de AngularJS, cadriciel construit par la même équipe. ',
      loveIts:0,
      created_at:new Date()
    },
    {
      title:'Encore un post',
      content:'Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld. ',
      loveIts:0,
      created_at:new Date()
    }
  ];
}

