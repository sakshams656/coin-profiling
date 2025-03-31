import React from 'react';
import "../../styles/shared/global.ts";
import store from "./Store/store.jsx"
import { Provider } from 'react-redux';
import Header from './HeaderPage/index.jsx';

const Blogs = () => {
  return (
    <Provider store={store} >
      <Header />
    </Provider>
  );
};

export default Blogs;
