import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Utilisateur } from '../model/utilisateur';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  mdp2: String = "";
  @Output() evtSoumission = new EventEmitter<Utilisateur>();
  constructor() { }

  ngOnInit(): void {
  }

  onFormSoumission(): void
  {
    this.evtSoumission.emit(this.utilisateur);
  }

}
