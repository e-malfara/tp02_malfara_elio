export class Utilisateur {
    civilite:string;
    nom:string;
    prenom:string;
    email:string;
    telephone:string;
    adresse:string;
    code:string;
    ville:string;
    login:string;
    mdp:string;
    mdp2:string;

    constructor() {
        this.civilite = "";
        this.nom = "";
        this.prenom = "";
        this.email = "";
        this.telephone = "";
        this.adresse = "";
        this.code = "";
        this.ville = "";
        this.login = "";
        this.mdp = "";
        this.mdp2 = "";
    }
}