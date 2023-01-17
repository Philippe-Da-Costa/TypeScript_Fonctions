//conttrairement a Js , TS possede la notion des enumerations  similaire au langage C.EnumsEtFonction
//definition: une enumeration indique les noms des valeurs. Exemple:
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Vert"] = 1] = "Vert";
    Couleur[Couleur["Bleu"] = 2] = "Bleu";
})(Couleur || (Couleur = {}));
;
//utilisation
var ma_couleur = Couleur.Bleu;
//Definition : une énumération en indiquant précisement les valeurs.
var Taille;
(function (Taille) {
    Taille[Taille["Petit"] = 3] = "Petit";
    Taille[Taille["Moyen"] = 10] = "Moyen";
    Taille[Taille["Grand"] = 11] = "Grand";
})(Taille || (Taille = {}));
;
var ma_Taille = Taille.Petit;
console.log(ma_Taille);
