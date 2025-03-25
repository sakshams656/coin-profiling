import React from 'react';
import BlogsPage from './BlogsPage';
import NewsPage from './BlogsPage';
import "../../styles/shared/global.ts";
import {store} from "../Blogs/Store/store"
import { Provider } from 'react-redux';

const Blogs = () => {
  return (
    <Provider store={store} >
      <BlogsPage />
    </Provider>
  );
};

export default Blogs;
