//using typicode
/*import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./App/store";
import { Provider } from "react-redux";
import { fetchPosts } from "./Features/posts/postsSlice";
import { fetchUsers } from "./Features/users/usersSlice";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router> 
        <Routes>
          <Route path="/*" element ={ <App />}/> 
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);*/


//using json-server
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './App/store';
import { Provider } from 'react-redux';
import { extendedApiSlice } from './Features/posts/postsSlice';
import { usersApiSlice } from './Features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
