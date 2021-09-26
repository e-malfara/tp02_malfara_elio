import { Component } from '@angular/core';
import { Utilisateur } from './model/utilisateur';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp02';
  utilisateur: Utilisateur = new Utilisateur();
  soumettre: Boolean = false;

  onEvtSoumission(resultatFormulaire: Utilisateur): void
  {
    this.utilisateur = resultatFormulaire;
    this.soumettre = true;
    console.log(this.utilisateur);
    
  }
}
