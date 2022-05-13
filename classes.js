class Animal {
    static animalType = 'lion'
    constructor(name) {
        this.name = name
    }

    showPhrase() {
        return `This is a ${Animal.animalType}. It's name is ${this.name}`
    }

    get getAnimalName() {
        return this.name
    }
}

const lion = new Animal('Snow')
console.log(lion.showPhrase())
console.log(lion.getAnimalName)