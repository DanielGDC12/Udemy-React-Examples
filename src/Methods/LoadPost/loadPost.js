export const loadPost = async () => {
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos')
  
    const [posts, photo] = await Promise.all([postResponse,photoResponse]);
    const postJson = await posts.json();
    const photoJson = await photo.json();
  
    const postAndphoto = postJson.map((post,index) => {
      return {...post, cover: photoJson[index].url}
    })
return postAndphoto;
}