// Écrivez une fonction JavaScript qui prendra 5 nombres comme arguments et trouvera le plus petit
//  et le plus grand nombre, respectivement.
// Exemple des nombres: 1, 2, 3, 4, 5
// Résultat attendu: 1, 5

// function PlusGrand(a,b,c,d,e){
//   let tab = []
//   tab.push(a)
//   tab.push(b)
//   tab.push(c)
//   tab.push(d)
//   tab.push(e)
//   const plusGrandeVal = tab.sort()[tab.length-1]
//   const plusPetiteVal = tab.sort()[0]
//   return [plusPetiteVal,plusGrandeVal] 
// }

// PlusGrand(1, 2, 3, 4, 5).forEach(ele =>console.log(ele))


// Écrivez une fonction JavaScript qui accepte deux arguments,
// une chaîne et une lettre, 
// et la fonction comptera le nombre d'occurrences de la lettre spécifiée dans la chaîne.
// Exemples d'arguments : 'JavaScript', 'a'.
// Résultat attendu: 2


// const combienLettre = (word, letter) => {
//     var counter = 0
//     for (let i = 0; i < word.length; i++) {
//         counter = ((word[i] === letter) ? ++counter : counter)
//     }
//     console.log(`${word} \nLa lettre ==> ${letter} ,il se repete ${counter} fois`)
// }

// combienLettre('JavaScript', 'a')


// Écrivez une fonction JavaScript pour trouver le premier caractère non répété.
// Exemple d'arguments : 'abacddbec'.
// Sortie attendue: 'e'.

// function wichLetteNotRepete(word){
//     let lengthWord = word.length 
//     var letter 

//     for(let i = 0;i<lengthWord;i++){
//         let counter = 0
//         for(let g = 0;g < lengthWord;g++){
//             if(word[i] === word[g]){
//                 counter++
//             }
//         }
//         if(counter <= 1){
//             letter = word[i]
//             break
//         }   
//     }
//     return letter

// }
// console.log(wichLetteNotRepete('abacddbec'))

// Écrivez une fonction récursive JavaScript pour calculer la factorielle d'un nombre.
// En mathématiques, la factorielle d'un entier non négatif n,
//  notée n!, est le produit de tous les entiers positifs inférieurs ou égaux à n. 
// Par exemple, 5! = 5 x 4 x 3 x 2 x 1 = 120.


// function factorielle(nombre){
//     if(nombre == 1){
//         return nombre
//     }
//     return nombre * factorielle(nombre - 1)
// }
// console.log(factorielle(5))


// Écrivez une fonction JavaScript pour obtenir les entiers dans l'intervalle (x, y).
// Utilisez 2 méthodes : la fonction récursive et les boucles.
// Exemple: range(2, 9)
// Résultat attendu: 3 - 4 - 5 - 6 - 7 - 8 -


// function sansRecursiviter(start, end) {
//     let liste=``
//     for (let i = start; i < end; i++)
//         liste += (i === start) ? `${i}` : ` - ${i} `
//     console.log(liste)
// }

// sansRecursiviter(2, 9)

// function avecRecursiviter(start,end){
//     if(start === end)
//         return
//     console.log(start) 
//     return avecRecursiviter(start+1, end)
// }

// avecRecursiviter(2, 9)

// Écrivez une fonction JavaScript pour calculer la valeur de bn où n est l'exposant 
// et b est la base avec des boucles et ensuite avec une récursion. 
// Acceptez b et n de la part de l'utilisateur et affichez le résultat.


// const sansRecursiviterPow = (nombre,puissance) => {
//     console.log(Math.pow(nombre,puissance))
// } 

// sansRecursiviterPow(5,5)


// const avecRecursiviterPow = (nombre,puissance) => {
//     if(--puissance === 0)
//         return nombre
//     return nombre * avecRecursiviterPow(nombre,puissance)
// } 

// console.log(avecRecursiviterPow(5,5))


// Écrivez une fonction JavaScript pour obtenir toutes les combinaisons possibles de sous 
// - ensembles de longueur fixe(par exemple 2) dans un tableau.
// Exemple de tableau: [1, 2, 3] et la longueur du sous - ensemble est 2.
// Résultat attendu: [[1, 2], [1, 3], [2, 3]].

// let combinaisonsTab = (tab) => {
//     const newTab = []
//     for (let i = 0; i < tab.length-1; i++) {
//         for (let g = i; g <= tab.length-2; g++) {
//             newTab.push([tab[i],tab[g+1]])
//         }
//     }
//     console.log(newTab)
// }

// combinaisonsTab([1, 2, 3])

// Écrivez un programme JavaScript pour trouver l'élément le plus fréquent d'un tableau.
// Exemple de tableau: [3, 'a', 'a', 'b', 2, 3, 'a', 3, 'a', 2, 'c', 9, 3, 'a'];
// Exemple de sortie: a(5 fois)

function elemFrequent(element) {
    let sortedTab = element.sort()
    let noDoublant = [...new Set(sortedTab)]
    let tabFrequentation = []
    for (let i = 0; i < noDoublant.length; i++) {
        let counter = 0
        for (let g = 0; g < sortedTab.length; g++) {
            (sortedTab[g] === noDoublant[i]) && ++counter
        }
        tabFrequentation.push([noDoublant[i],counter,`le caractere " ${noDoublant[i]} " ce repete : ${counter} fois`]);
    }
    console.log(tabFrequentation.sort((a, b) => b[1] - a[1])[0][2]);
}
elemFrequent([3, 'a', 'a', 'b', 2, 3, 'a', 3, 'a', 2, 'c', 9, 3, 'a'])