import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttpClient } from './02-open-close-c';

(async () => {

    const httpCLient = new HttpClient;

    const todoService = new TodoService(httpCLient);
    const postService = new PostService(httpCLient);
    const photosService = new PhotosService(httpCLient);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();