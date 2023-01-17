//conttrairement a Js , TS possede la notion des enumerations  similaire au langage C.EnumsEtFonction
//definition: une enumeration indique les noms des valeurs. Exemple:
enum Couleur {Rouge=0,Vert=1,Bleu=2}; 
//utilisation
const ma_couleur =Couleur.Bleu;

//Definition : une énumération en indiquant précisement les valeurs.

enum Taille { Petit=3,Moyen=10,Grand=11}; 
const ma_Taille : Taille =  Taille.Petit;
console.log(ma_Taille);
