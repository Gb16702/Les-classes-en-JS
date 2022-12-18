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

var koala = new Animal("Koala", "55", "4")
koala.details()

var oiseau = new Animal('Pigeon', '7', '2')
oiseau.details()