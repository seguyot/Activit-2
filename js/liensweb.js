/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com/",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org/",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://wikipedia.org/",
        auteur: "annie.zette"
    }
];



//activity one

function creationLien() {
    document.getElementById("contenu").innerHTML = " ";
    listeLiens.forEach(function (listeLiens) {
        var newdiv = document.createElement("div");
        newdiv.className = "lien";
        document.getElementById("contenu").appendChild(newdiv);

        var lien = document.createElement("h4");
        lien.innerHTML = "<a href=" + listeLiens.url + " style='color:#428bca;'>" + listeLiens.titre + "</a>" + "<span>" + listeLiens.url + "<br>" + listeLiens.auteur + "</span>";
        newdiv.appendChild(lien);
    })
};
creationLien();
//activite 2



//Bouton d'affichage du formulaire
var affichageFormBouton = document.getElementById("ajoutForm");

//Creation de l'Element Formulaire : formElt
var formElt;
formElt = document.createElement("form");

//Creation Elements du message de confirmation
var messageAjout = document.getElementById("nomDuLien");
var messageLien = document.getElementById("adresseDuLien");

//animation Affichage du formulaire d'ajout lors du click
function affichage() {
    affichageFormBouton.addEventListener('click', function () {
        affichageFormBouton.style.display = "none"; // cache notre bouton
        formElt = creationFormulaire();
        document.body.insertBefore(formElt, contenu); // Permet de le situer avant le contenue.

        // Animations et validation du formulaire (bouton ajouter)
        formElt.addEventListener('submit', function (event) {
            formElt.style.display = "none"; // cache notre bouton
            affichageFormBouton.style.display = "inline-block";
            ajoutNouveauLien();
            formElt.reset();
            event.preventDefault();


        });

    });
}
affichage();

// permet de creer un formulaire
function creationFormulaire() {
    formElt.className = "formulaire";
    formElt.appendChild
        (info({
            "type": "text", /* type est un attributes et text est clef */
            "name": "auteur",
            "placeholder": "Entrez votre nom",
            "required": "required"
        }));
    formElt.appendChild(info({
        "type": "text",
        "name": "titre",
        "placeholder": "Entrez le titre du lien",
        "size": "30",
        "required": "required"
    }));
    formElt.appendChild(info({
        "type": "text",
        "name": "url",
        "placeholder": "Entrez l'URL du lien",
        "size": "30",
        "required": "required"
    }));
    formElt.appendChild(info({
        "type": "submit",
        "name": "bouton",
        "value": "Ajouter"
    }));
    return formElt;
}
function info(attributes) {
    var element = document.createElement("input");
    for (var clef in attributes) {
        element.setAttribute(clef, attributes[clef])
    }
    return element;
}

function ajoutNouveauLien() {

    var liens = {
        titre: formElt.elements.titre.value,
        url: formElt.elements.url.value,
        auteur: formElt.elements.auteur.value,
    }

    listeLiens.unshift(liens); // unshift, ajoute au début d'un tableau
    console.log(listeLiens);
    creationLien();
    affichage();
    formElt.reset();


}

