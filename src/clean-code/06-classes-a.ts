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

    class User extends Person {

        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            //private lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date,
        ){
            super( name, gender, birthdate) // for call the fathers constructor
            this.lastAccess = new Date();
        }
    }

    class UserSettings extends  User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettigs = new UserSettings(
        '/usr/home',
        '/home',
        'fmollinedo@gmail.com',
        'Admin',
        'Favio',
        'M',
        new Date('1990-12-12')
    )
    console.log({userSettigs}); //no cumple el pirncipio de responsabilidad única, es muy dificil de mantener el código
    

    const newPerson = new Person('German', 'M', new Date('1975-12-22'));
    console.log({ newPerson });

})();