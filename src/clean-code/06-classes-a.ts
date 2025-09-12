(() => {

    type Gender = 'M'|'F';
    class Person {
        /* public name: string;
        public gender: Gender;
        public birthdate: Date; */

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) {
            /* this.name = name;
            this.gender = gender;
            this.birthdate = birthdate; */
        }
    }

    const newPerson = new Person('German', 'M', new Date('1975-12-22'));
    console.log({ newPerson });

})();