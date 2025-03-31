import React from 'react';
import BlogsPage from './BlogsPage';
import NewsPage from './BlogsPage';
import "../../styles/shared/global.ts";
import { Provider } from 'react-redux';
import store from './Store/store';

const Blogs = () => {
  return (
    <Provider store={store} >
      <BlogsPage />
    </Provider>
  );
};

export default Blogs;
