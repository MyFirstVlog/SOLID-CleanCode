import { LocalDataBaseService, jsonDbService, PostProvider } from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostProvider) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        //Modificaciones que se tengan que hacer internamente en el método violenete OCP, para ello hacemos inyeccion de dependencias, en el constructor
        // const jsonDB = new jsonDbService();
        this.posts = await this.postProvider.getPost();

        return this.posts;
    }
}
