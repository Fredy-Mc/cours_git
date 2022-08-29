// selectionner la navigation
const students = [
    {num: "08", name: "Fredy MCHINDRA"},
    {num: "02", name: "Terence DEVEQUI"}
]


const nav = document.querySelector('#navigation ul'); // Je récupère un ul dans un élément ayant pour id navigation

const location = window.location ; // l'url du site
const protocol = location.protocol ; // exemple : http: ou https:
const domain = location.hostname ; // exemple : www.exemple.com ou 127.0.0.1 ou localhost etc
const port = location.port ; // exemple : 5500 ou 80 ou 8080 etc

const url = protocol + "//" + domain + ":" + port // exemple : http://127.0.0.1:5500/

students.forEach(student => {
    nav.innerHTML +=    
    "<li>" +
        "<a href='" + url + "/" + student.num + "/hello.html'>" + student.name + "</a> " +     
    "</li>"
});