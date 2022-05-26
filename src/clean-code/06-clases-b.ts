// (() => { //* Lo mio

//     type Gender = 'M' | 'F' ;

//     interface PersonProps {
//         name      : string;
//         gender    : Gender;
//         birthDate : Date;
//     }

//     class Person {
//         // public name: string;
//         // public gender: Gender;
//         // public birthDate: Date;

//         // constructor(name: string, gender: Gender, birthDate: Date){
//         //     this.name = name;
//         //     this.gender = gender;
//         //     this.birthDate = birthDate;
//         // }

//         //* Se puede reemplazar por la forma corta:
//         public name: string;
//         public gender: Gender;
//         public birthDate: Date;

//         constructor({name, gender, birthDate,}: PersonProps
//         ){
//             this.name = name;
//             this.gender = gender;
//             this.birthDate = birthDate;
//         }

//         // Ahora cambio su iniciacion con de propiedades con interface
//     }

//     interface UserProps extends PersonProps{
//         email      :string,
//         role       : string,
//         lastAccess : Date,
//     }

//     class User extends Person{     
//         public email      :string;
//         public lastAccess : Date;
//         public role       : string;

//         constructor({
//             birthDate,
//             email,
//             gender,
//             name,
//             role,
//         } : UserProps
//         ){
//             super({name, gender, birthDate}); // Para inicializar constructor del padre
//             this.email = email;
//             this.role = role;
//             this.lastAccess = new Date();
//         }

//         checkCredentials(){
//             return true;
//         }
//     }

//     interface UserSettingsProps extends UserProps{
//         lastOpenFolder   : string, 
//         workingDirectory : string, 
//     }

//     class UserSettings extends User{ // Incumple responsabilidad unica, se encarga de bastantes propiedades
//         public lastOpenFolder: string;
//         public workingDirectory: string;

//         constructor({
//             workingDirectory,
//             lastOpenFolder,
//             email,
//             role,
//             lastAccess,
//             name,
//             gender,
//             birthDate,
//         }: UserSettingsProps
//         ){
//             super({email, role, lastAccess,name, gender,birthDate});

//             this.workingDirectory = workingDirectory;
//             this.lastOpenFolder = lastOpenFolder;
//         }
//     }

//     // const newPerson = new Person('Alejo', 'F', new Date('1997-09-30'));

//     const userSettings = new UserSettings({
//         workingDirectory : '/user', 
//         lastOpenFolder   : '/home', 
//         email            : 'alejo@alejos.com', 
//         role             : 'dev', 
//         lastAccess        :  new Date(2021-20-08), 
//         name             : 'Alejo',
//         gender           : 'F', 
//         birthDate        : new Date('1997-09-30')})
//     console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()},);
// })();

(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        birthdate : Date;
        email     : string;
        gender    : Gender;
        name      : string;
        role      : string;
    }

    class User extends Person {
        
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({
            birthdate,
            email,
            gender,
            name,
            role,
        }: UserProps ) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps ) {
            super({ email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();