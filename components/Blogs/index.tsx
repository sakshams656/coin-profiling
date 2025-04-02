import React from 'react';
import BlogsPage from './BlogsPage';
import "../../styles/shared/global.ts";
import { Provider } from 'react-redux';
import store from '../../Store';

const Blogs = () => {
  return (
    <Provider store={store} >
      <BlogsPage />
    </Provider>
  );
};

export default Blogs;
