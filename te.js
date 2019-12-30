class Animal {
    constructor() {
        this.name = "Dog";
    }
    bark() {
        console.log(this.name + ": woof");
    }
}
let anim = new Animal();
anim.bark()
