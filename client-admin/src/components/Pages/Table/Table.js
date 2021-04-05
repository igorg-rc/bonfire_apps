import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {Posts} from './Posts'
import Pagination from './Pagination'


export default function Table() {
  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage ] = useState(10);



  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false)
    }

    fetchPosts();
  }, []);
  

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currnentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const setNextPage = (pageNumber) => setCurrentPage(pageNumber + 1);
  const setPrevPage = (pageNumber) => setCurrentPage(pageNumber - 1);

  return (
    <div>
      <h1>Pagination</h1>
     
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length} 
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
        paginate={paginate}
      />
      <Posts posts={currnentPosts} loading={loading} />
    </div>
  )
}

 