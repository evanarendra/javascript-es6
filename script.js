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
        console.log(`Halo ${this.name}, have a nice play`);
    }
}

let register_ = new Students('Costa', 20);


/* Object create */

const methodStudents = {
    eat: function(portion){
        this.energy += portion;
        console.log(`Halo ${this.name}, enjoy your meal`);
    },

    play: function(hour){
        this.energy -= hour;
        console.log(`Halo ${this.name}, have a nice play`);
    },

    sleep: function(hour){
        this.energy += hour * 2;
        console.log(`Halo ${this.name}, have a goodnight`);
    }
};

function Students_(name, energy){


    let students = Object.create(methodStudents);
    students.name = name;
    students.energy = energy;


}

let register = Students_('Evan', 50);

let register1 = Students_('Santana', 40);