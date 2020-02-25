//udemy coding challange 4

var john = {
    name: "john",
    age: "23",
    mass: "65",
    height: "170",
    getBmi: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
};

console.log(john.getBmi());
