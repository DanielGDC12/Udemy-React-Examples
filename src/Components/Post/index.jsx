import { PostCard } from "../PostCard/index";

import './style.css'

export const Post = ({posts}) => (
    <div className="posts-container">
        {posts.map(response =>( 
               <PostCard 
               title={response.title}
               cover={response.cover}
               body={response.body}
           />
        ))}
   </div>
); 