(() => {

    type Gender = 'M'|'F';

    interface PersonProps {
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name, gender, birthdate}: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        email: string;
        role: string;
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class User extends Person {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({email, role, name, gender, birthdate}: UserProps
        ){
            super( {name, gender, birthdate}) // for call the fathers constructor
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends  User {
        
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            {workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate}: UserSettingsProps
        ){
            super({email, role, name, gender, birthdate})
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettigs = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'fmollinedo@gmail.com',
        role: 'Admin',
        name: 'Favio',
        gender: 'M',
        birthdate: new Date('1990-12-12')
    });
    console.log({userSettigs}); //no cumple el pirncipio de responsabilidad única, es muy dificil de mantener el código
    

    /*const newPerson = new Person('German', 'M', new Date('1975-12-22'));
    console.log({ newPerson });*/

})();