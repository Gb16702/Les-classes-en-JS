class Animal {
    constructor(race, poids, pattes) {
        this.race = race
        this.poids = poids
        this.pattes = pattes
    }
    details() {
        console.log(`Je suis un ${this.race}, je fais ${this.poids} kilos, et j'ai ${this.pattes} pattes`)
        }
}

class Oiseau extends Animal {
    constructor(race, nombreDePattes, poids, longueurDesAiles) {
        super(race, nombreDePattes, poids) // super est une fonction permettant d'appeler la classe Animal en l'occurence pour l'héritge
        this.longueurDesAiles = longueurDesAiles
    }
    voler() {
        console.log(`L'oiseau a de ${this.longueurDesAiles} ailes`)
    }
}

var koala = new Animal("Koala", "55", "4")
koala.details()

var perroquet = new Oiseau('Pigeon', '7', '2', 'grandes')
perroquet.details(); perroquet.voler()