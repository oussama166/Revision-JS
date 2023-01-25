// Ajouter une méthode à l'objet suivant pour obtenir la longueur de cet objet.
// Exemple d'objet :

let etudiant1 = {
  nom: "aziz ahmed",
  module: "JavaScript",
  note: 18
};

console.log(etudiant1)

// Écrivez une fonction JavaScript pour récupérer tous les noms des propriétés de l'objet.

function extractName(obje) {
  for (const object in obje) {
    console.log(` ${object} : ${obje[object]}`)
  }
}

// extractName(etudiant1);

// Écrivez une fonction JavaScript pour obtenir une copie de l'objet 
// où les clés sont devenues les valeurs et  les valeurs les clés.

function replaceObject(object) {
  let newObject = {}
  for (const obj in object) {
    newObject[object[obj]] = obj
  }
  extractName(newObject)
}

// replaceObject(etudiant1)

// Créer le constructeur Personne qui a les propriétés nom et age et la méthode exist qui 
// vérifie si une propriété donnée existe aux objets créés à partir du constructeur Personne.
function Personne(nom, age) {
  this.nom = nom
  this.age = age
}

Personne.prototype.existe = function (prorp) {
  for (const objet in this) {
    if (this[objet] === prorp)
      return true
  }
  return false
}

let persone1 = new Personne('oussama', 20)

console.log(persone1.existe('test'))



// Créez ensuite le constructeur Etudiant qui hérite de Personne et possède les propriétés supplémentaires
// matriculation, modules(tableau), notes(tableau) et
// la méthode bonjour qui affiche le message
// "Bonjour nom tu as note1/20 dans module1, note2/20 dans module2 ...".

function Etudiant(nom, age, matricule, modules, notes) {
  Personne.call(this, nom, age);
  this.matricule = matricule
  this.modules = modules
  this.notes = notes
}

Etudiant.prototype = Object.create(Personne.prototype.existe)
Etudiant.prototype.afficher = function () {
  let value = `
                Matricule : ${this.matricule}
                Le nom :  ${this.nom}
                Age : ${this.age} ans
                Les notes des modules 
                <=================================>

`
  for (let i = 0; i < this.modules.length; i++) {
    value += `                ${this.modules[i]} : ${this.notes[i]}/20\n`
  }
  value += `                <=================================>`
  console.log(value)
}

let moudules = [
  'JavaScript',
  'POO',
  'Reseau Informatique',
  'SQL'
]
let notes = [
  20,
  19.5,
  14.5,
  19.5
]

let etudiant2 = new Etudiant('oussama ouardi', 20, 'BBAS19913801', moudules, notes)

etudiant2.afficher()

// Écrivez un constructeur JavaScript Livre qui possède les propriétés titre, auteur et id 
// et un constructeur Bibliotheque qui possède
//  les propriétés nom, emplacement 
//  et livres(tableau d'objets Livre) et 
//  la méthode trier pour trier les livres en fonction d’une propriété spécifiée (titre, auteur ou id).
// Exemple d’un tableau des livres :
// [new Livre('Algorithms (4th Edition)', 'Kevin Wayne', 3245),
// new Livre('Cracking the Coding Interview', 'Gayle Laakmann McDowell', 1254),
//   new Livre('Python Crash Course', 'Eric Matthes', 4264)];

function Livre(titre, auteur, id) {
  this.id = id
  this.titre = titre
  this.auteur = auteur
}

// TODO CREATION DE CONSTRUCTEUR BIBLIOTHEQUE 
function Bibliotheque(nom, emplacement, livres) {
  this.nom = nom
  this.emplacement = emplacement
  this.livres = livres
}

Bibliotheque.prototype.trier = function (prop) {

  let LivresSorted = (this.livres.sort((livrCr, livrSv) => {
    if (livrCr[prop] > livrSv[prop] ) {
      return 1
    }
    else
      return -1
  }))
  console.table(LivresSorted);
}

let arrBiblio = 
[
  new Livre('Algorithms (4th Edition)', 'Kevin Wayne', 3245),
  new Livre('Cracking the Coding Interview', 'Gayle Laakmann McDowell', 1254),
  new Livre('Python Crash Course', 'Eric Matthes', 4264)
]

let Bibliotheque1 = new Bibliotheque("emsi biblio", "Mly Youssef",arrBiblio)

Bibliotheque1.trier("id")
Bibliotheque1.trier("titre")
Bibliotheque1.trier("auteur")

