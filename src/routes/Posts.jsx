import { Outlet } from 'react-router-dom';

import { useState } from 'react';

import PostsList from '../components/PostsList';

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
