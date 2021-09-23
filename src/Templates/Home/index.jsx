import {Post}  from '../../Components/Post/index'
import { Button } from '../../Components/Button/Button';
import { Input } from '../../Components/Input/input';

import { loadPost } from '../../Methods/LoadPost/loadPost';


import './styles.css';


import {Component} from   'react';



export class Home extends  Component 
{
    state = {
      posts:[],
      allPosts: [],
      post: 0,
      postPerPage: 2,
      searchValue: '',

};

async componentDidMount(){
  await this.loadPost ();
};

 loadPost = async () =>{
  const {post,postPerPage}= this.state;
  const postAndPhoto = await loadPost();

   this.setState({
     posts: postAndPhoto.slice(post,postPerPage),
     allPosts: postAndPhoto,
   
   });
 }

 loadMorePost = () => {
   const {posts,allPosts,post,postPerPage} = this.state;
   const nextPage = post + postPerPage;
   const nextPost = allPosts.slice(nextPage, nextPage+postPerPage);
   posts.push(...nextPost);
   this.setState({posts, post: nextPage});
 }

  HandleChange = (e) =>{
    const {value} = e.target;
    this.setState({searchValue: value})

  }

    render() {
      const   {posts,post,postPerPage,allPosts,searchValue  } = this.state;
      const noMorePost = post + postPerPage >= allPosts.length;


      const filteredPost = !!searchValue ? allPosts.filter(p => {return p.title.toLowerCase().includes(searchValue.toLowerCase());})
        : posts;
         

      return(
      <section className="container">
          <div className="input-container">
            <Input
              onChange={this.HandleChange}
              value={searchValue} 
            />
          </div>

         <Post
            posts={filteredPost}
         />
         <div className="button-container">
           {!searchValue && ( <Button text="more options"
                disabled={noMorePost}
            onClick={this.loadMorePost} />
             )}
         </div>
      </section>

      )};
}


