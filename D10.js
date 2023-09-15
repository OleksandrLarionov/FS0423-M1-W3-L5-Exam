/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const sum = 10 + 20;
console.log("sum: ", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log("Il numero random è: ", random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
	name: "Oleksandr",
	surname: "Larionov",
	age: 32,
};

console.log("I miei Dati: ", me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["javascript I", "javascript II"];
console.log("Aggiunta di array skills :", me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("React");
console.log("Aggiunta di un nuovo elemento ", me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();

console.log("Rimozione del'ultimo elemento", me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => Math.ceil(Math.random() * 6);

console.log("Il risultato del Dice è:", dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (n1, n2) => {
	if (n1 > n2) {
		return n1;
	} else {
		return n2;
	}
};

console.log("Il più grande tra i due numeri è :", whoIsBigger(3, 4));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (string) => string.split(" ");

console.log(splitMe("Ciao Sono il più forte di tutti"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (string, boolean) => {
	if (boolean === true) {
		const firstChar = string.slice(0, 1);
		return firstChar;
	} else if (boolean === false) {
		const lastChar = string.slice(-1);
		return lastChar;
	}
};

console.log("Questo è vero : ", deleteOne("Ciao", true));
console.log("Questo è falso: ", deleteOne("Ciao", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (string) => {
	let newArray = string.split(" ");
	for (let i = 0; i < newArray.length; i++) {
		if (Number(newArray[i])) {
			newArray.splice(i, 1);
		}
	}
	return newArray.join(" ");
};

console.log("Prova rimozione numeri:   ", onlyLetters("I have 4 dogs"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (address) => {
	let myReg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
	if (myReg.test(address)) {
		console.log("la mail è: ", true);
	} else {
		console.log("la mail è: ", false);
	}
};
isThisAnEmail("peppa@gmail.com");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const week = [
	"lunedi",
	"martedi",
	"mercoledi",
	"giovedi",
	"venerdi",
	"sabato",
	"domenica",
];
const whatDayIsIt = () => {
	let myDay = "";
	const allDate = new Date();
	const currentDay = allDate.getDay();
	for (let i = 0; i < week.length; i++) {
		if (currentDay === i + 1) {
			myDay = week[i];
		}
	}
	return myDay;
};
console.log("oggi è:", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (number) => {
	let arrNumbers = [];
	for (let i = 0; i < number; i++) {
		arrNumbers.push(dice());
	}
	let somma = arrNumbers.reduce((sum, number) => sum + number, 0);
	arrNumbers.sum = somma;

	return arrNumbers;
};

console.log(rollTheDices(5));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
	const currentDays = new Date();
	const currentDay = currentDays.getDate();
	if (data <= currentDay) {
		let dayPassed = currentDay - data;
		return console.log("Sono passati ben :", dayPassed, "giorno/i");
	} else {
		return console.log("Non siamo ancora arrivati a tale data");
	}
}
howManyDays(16);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = (giorno, mese, anno) => {
	const date = new Date();
	let gg, mm, aaaa;
	gg = date.getDate();
	mm = date.getMonth() + 1; // + "/";
	// aaaa = date.getFullYear();
	const todayIs = gg + mm + aaaa;
	if (gg === giorno && mm === mese) {
		return console.log("Oggi è il mio compleanno");
	} else {
		return console.log("Non è il mio compleanno");
	}
};

isTodayMyBirthday(15, 9);

// Arrays & Oggetti

const movies = [
	{
		Title: "The Lord of the Rings: The Fellowship of the Ring",
		Year: "2001",
		imdbID: "tt0120737",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
	},

	{
		Title: "The Lord of the Rings: The Return of the King",
		Year: "2003",
		imdbID: "tt0167260",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
	},
	{
		Title: "The Lord of the Rings: The Two Towers",
		Year: "2002",
		imdbID: "tt0167261",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
	},
	{
		Title: "Lord of War",
		Year: "2005",
		imdbID: "tt0399295",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
	},
	{
		Title: "Lords of Dogtown",
		Year: "2005",
		imdbID: "tt0355702",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
	},
	{
		Title: "The Lord of the Rings",
		Year: "1978",
		imdbID: "tt0077869",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
	},
	{
		Title: "Lord of the Flies",
		Year: "1990",
		imdbID: "tt0100054",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
	},
	{
		Title: "The Lords of Salem",
		Year: "2012",
		imdbID: "tt1731697",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
	},
	{
		Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
		Year: "1984",
		imdbID: "tt0087365",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
	},
	{
		Title: "Lord of the Flies",
		Year: "1963",
		imdbID: "tt0057261",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
	},
	{
		Title: "The Avengers",
		Year: "2012",
		imdbID: "tt0848228",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Infinity War",
		Year: "2018",
		imdbID: "tt4154756",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Age of Ultron",
		Year: "2015",
		imdbID: "tt2395427",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Endgame",
		Year: "2019",
		imdbID: "tt4154796",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
	},
];

console.log("ESERCIZZI CON GLI ARRAY");
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
let myFilm = {
	Title: "Avengers: Endgame",
	Year: "2019",
	imdbID: "tt4154796",
	Type: "movie",
	Poster:
		"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
};

const deleteProp = (obj, string) => {
	delete obj[string];
	return myFilm;
};
console.log(deleteProp(myFilm, "Type"));
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
let newstMovies = (array) => {
	let newstFilm = array[0];
	array.forEach((movie) => {
		if (parseInt(movie.Year) > parseInt(newstFilm.Year)) {
			newstFilm = movie;
		}
	});
	return newstFilm;
};
console.log("Ultimo uscito è", newstMovies(movies));
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
let countMovies = () => {
	return movies.length;
};
console.log("Sono presenti nel Database :", countMovies(), "Film");
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (arr) => {
	const onlyYears = [];
	for (let i = 0; i < arr.length; i++) {
		onlyYears.push(arr[i].Year);
	}
	return onlyYears;
};
console.log("Solo gli anni d'uscita dei film: ", onlyTheYears(movies));
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = () => {
	let milleniumMovie = movies.filter((movie) => movie.Year < 1999);
	return milleniumMovie;
};

console.log("Film Dei anni 90 sono: ", onlyInLastMillennium());
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

//richiamo la funzione anni che ho già
const sumAllTheYears = () => {
	let sum = onlyTheYears(movies).reduce((a, b) => parseInt(a) + parseInt(b), 0);

	return sum;
};
console.log("La somma degli Anni è:", sumAllTheYears());
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (filmName) => {
	const myArr = movies;
	let peppa = myArr.find((n) => n.Title === filmName);
	return peppa;
};
console.log(searchByTitle("Avengers: Endgame"));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (string) => {
	const myObj = {
		match: [],
		unmatch: [],
	};
	movies.forEach((movie) => {
		if (movie.Title.includes(string)) {
			myObj.match.push(movie.Title);
		} else {
			myObj.unmatch.push(movie.Title);
		}
	});
	return myObj;
};
console.log(searchAndDivide("Lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (number) => {
	movies.splice(number, 1);
	return movies;
};

console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const idSelector = () => document.getElementById("container");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const tagSelector = () => document.getElementsByTagName("td");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const textTag = () => {
	const tag = tagSelector();
	for (let i = 0; i < tag.length; i++) {
		console.log(tag[i].innerText);
	}
};

// NOn chiamo le funzioni

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const backRed = () => {
	const myLink = document.getElementsByTagName("a");
	let array = Array.from(myLink);
	array.forEach((n) => (n.style.backgroundColor = "red"));
};
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addLi = () => {
	const myList = document.getElementById("myList");
	const newLi = document.createElement("li");
	myList.appendChild(newLi);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const remLis = () => {
	const myList = document.querySelectorAll("#myList li");
	myList.forEach((li) => li.remove());
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addTag = () => {
	const myTr = document.getElementsByTagName("tr");
	let array = Array.from(myTr);
	array.forEach((tr) => tr.className.add("test"));
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (number) => {
	if (number % 2 === 0 && number !== 2) {
		console.log(false);
	} else if (number === 1) {
		console.log(false);
	} else {
		console.log(true);
	}
};
isItPrime(1);
/* Questo array viene usato per gli esercizi. Non modificarlo. */

//l'ho spostato sopra
