import { PostService } from './05-dependency-b';
import { jsonDbService, LocalDataBaseService, WebService } from './05-dependency-c';


// Main
(async () => {

    const provider = new WebService();
    // const provider = new jsonDbService();
    // const provider = new LocalDataBaseService();
    //Aplico princio de inversion de dependencia

    const postService = new PostService(provider);


    const posts = await postService.getPosts();

    console.log({ posts })


})();