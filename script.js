//literal Obj

let student = {
    name: 'Ezequiel',
    energy: 10,
    eat: function(portion){
        this.energy = this.energy + portion;
        console.log(`Hello ${this.name}, enjoy your meal :)`);
    }
}