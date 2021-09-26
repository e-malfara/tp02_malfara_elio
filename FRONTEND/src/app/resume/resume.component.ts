import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  @Input() utilisateur : Utilisateur = new Utilisateur();
  constructor() { }

  ngOnInit(): void {
  }

}
