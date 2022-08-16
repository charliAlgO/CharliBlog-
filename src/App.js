
import PostList from "./Features/posts/PostList";
import AddPostForm from "./Features/posts/AddPostForm";
import SinglePostPage from "./Features/posts/SinglePostPage";
import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import EditPostForm from "./Features/posts/EditPostForm";
import UserPage from "./Features/users/UserPage";
import UsersList from "./Features/users/UsersList";


//the layout component is the parent to everything else, asides the App n index file
//so we have two nested routes, one is the index, the other, the post route, inside the post route, we have another index...

function App() {
  return ( 
  <main className="App">
    <Routes> 

      <Route path="/" element={<Layout/>}>

        <Route index element = { <PostList />}/>

        <Route path="post">
          <Route index element = { <AddPostForm />}/>
          <Route path = ":postId" element = {<SinglePostPage/>}/>
          <Route path = "edit/:postId" element = {<EditPostForm/>}/>
        </Route>

        <Route path="user">
          <Route index element = {<UsersList/>}/>
          <Route path=":userId" element={<UserPage/>}/>
        </Route>
        {/*catch all "*"- this asteriks will select any route that makes it pass any other route, it would grabbed and redirected to the homepage - replace with 404 component if you want, navigate back to the homepage if it doesnt exists */}
        <Route path="*" element= {<Navigate to="/" replace/>}/>

      </Route>
      
    </Routes>
  </main>
  )
}

export default App;
