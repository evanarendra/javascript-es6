/* literal Obj */

// let student = {
//     name: 'Ezequiel',
//     energy: 10,
//     eat: function(portion){
//         this.energy = this.energy + portion;
//         console.log(`Hello ${this.name}, enjoy your meal :)`);
//     }
// }

/* function declaration */
// function Students(name, energy){

//     let students = {};
//     students.name = name;
//     students.energy = energy;

//     students.eat = function(portion){
//         this.energy += portion;
//         console.log(`Halo ${this.name}, enjoy your meal`);
//     }

//     students.play = function(hour){
//         this.energy -= hour;
//         console.log(`Hali ${this.name}, have a nice play`)
//     }

//     return students;

// }

// let register = Students('Evan', 50);

// let register1 =Students('Santana', 40);

/* Constructor Function 
keyword new */

function Students(name, energy){

    this.name = name;
    this.energy = energy;

    this.eat = function(portion){
        this.energy += portion;
        console.log(`Halo ${this.name}, enjoy your meal`);
    }

    this.play = function(hour){
        this.energy -= hour;
        console.log(`Hali ${this.name}, have a nice play`)
    }
}

let register = new Students('Costa', 20);