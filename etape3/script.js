"use strict";
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 5 },
    { nom: "nom-3", prenom: "prenom-3", points: 5 }
];


let lignes = 0;
Init()

function Init() {
    // Ici on utilise une boucle for..of, vue dans le slide 45
    for (const person of persons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

// doInsert() : prépare le numéro puis insère la ligne

function doInsert(nom, prenom, points) {
    lignes = lignes + 1;
    const num = lignes;
    doInsertRowTable(num, nom, prenom, points);
}


function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément tableau grâce à son id : getElementById (slide 62)
    const table = document.getElementById("table_persons"); // const : slide 52

    // Créer un élément tr (ligne de tableau) : createElement (slide 105)
    const row = document.createElement("tr");

    // Affecter la classe "row" avec setAttribute (slide 108)
    row.setAttribute("class", "row");

    // Créer 5 éléments td (colonnes) : createElement (slide 105)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu avec innerText (slide 92)
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    // La dernière colonne contient une checkbox : innerHTML est reconnu comme du HTML (slide 92)
    col5.innerHTML = '<input type="checkbox"/>';

    // Affecter les classes des colonnes avec setAttribute (slide 108)
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne avec append() (slide 99)
    row.append(col1, col2, col3, col4, col5);

    // Ajouter la ligne au tableau avec append() (slide 99)
    table.append(row);
}


// Affiche le contenu du tableau "persons" dans la console

function consoleTableau() {
    console.log(persons); // console.log : slide 34
}
