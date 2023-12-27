import React from 'react';
import { api } from '../../services/api';

export default function home() {
  api.get('/posts').then((res) => {
    console.log(res.data);
  });

  return (
    <>
      <div>home</div>
    </>
  );
}
