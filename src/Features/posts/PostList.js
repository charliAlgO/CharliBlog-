import { useSelector } from "react-redux";
import { selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from './postsSlice';

const PostsList = () => {
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsQuery()

    const orderedPostIds = useSelector(selectPostIds)

    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}
export default PostsList


//using typicode..creathunk
/*import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;*/

/*import { useSelector } from "react-redux";

import { selectAllPosts, getPostsStatus, getPostsError} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";


const PostList = () => {


  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  
 

  let content;
  if (postsStatus === 'loading'){
    content = <p>"Loading ..."</p>
  } else if (postsStatus === 'succeeded'){
      const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
      content = orderedPosts.map(post => <PostsExcerpt key={post.idd} post = {post}/>)
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>
  }

  return (
    <section>
      {content}
    </section>
  );
};

export default PostList;*/

/*we send a prop; userId from here to the PostAuthor  child component*/
