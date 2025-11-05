(() => {

    // Aplicadno el Principio de Responsabilidad Única
    // Priorizar la composición frente a la Herencia

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
    }

    class User {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({email, role}: UserProps
        ){
            
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProps){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingsProps){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory});
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