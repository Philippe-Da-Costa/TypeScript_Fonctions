//Declaration dune fonction JS
let f = function(x,y){ return x*y}
// syntaxe fonction fleché (Expression lambda,arrow fléché):
//(params =>{code}) 
// definition identique a f  ,mais plus simple (Tres utile en angular)

let g =(x,y)=>{
    return x*y
}
let h =(x:number,y:number)=>{
    return x*y
}
console.log(g(4,5));
console.log(h(10,8));

//exercice 1

let infosClients=(id:number,nom:string,email?:string)=>{

    console.log("id : ",id);
    console.log("nom : ",nom);
    if (email !=undefined) 
    console.log("Email : ",email);
}
infosClients(1,"Gilbert");
infosClients(12,"Helene","Helene@gmail.com");


//exercice 2
//Ecrire une fonction :(nomProduit, prixHt, Tva resultat)
let calculPTVA= (nomProduit:string, 
    prixHt:number, 
    tva:number)=>{
    let prixttc = prixHt*(1+tva/100);
     return console.log("le nom du projet : "+nomProduit+" "+" le prix ttc est : "+prixttc) ;
   
};
calculPTVA("moto",9000,20)
calculPTVA("coucou", 80, 20)



