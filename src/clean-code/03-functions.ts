(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: number ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsById( id: number ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: number ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie({title, description, rating, cast}: movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'Yolo' ) return false;

        console.log('Crear actor', birthDate);
        return true;        

    }

    
const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    if ( isDead ) return 1500;
    
    if ( isSeparated ) return 2500;

    return isRetired ? 3000 : 4000;
    
}


})();