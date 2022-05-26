(() => {

    type Gender = 'M' | 'F' ;

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthDate: Date;

        // constructor(name: string, gender: Gender, birthDate: Date){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthDate = birthDate;
        // }

        //* Se puede reemplazar por la forma corta:
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date,
        ){}
    }

    class User extends Person{

        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            name: string,
            gender: Gender,
            birthDate: Date,
        ){
            super(name, gender, birthDate); // Para inicializar constructor del padre
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{ // Incumple responsabilidad unica, se encarga de bastantes propiedades
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            lastAccess: Date,
            name: string,
            gender: Gender,
            birthDate: Date,
        ){
            super(email, role, lastAccess,name, gender,birthDate);
        }
    }

    const newPerson = new Person('Alejo', 'F', new Date('1997-09-30'));

    const userSettings = new UserSettings('/user', '/home', 'alejo@alejos.com', 'dev', new Date(2021-20-08), 'Alejo','F', new Date('1997-09-30'))


    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()});
})();