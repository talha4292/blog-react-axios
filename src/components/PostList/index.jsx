import { useState, useEffect } from 'react'
import getPosts from '../../api'
import PostItem from '../PostItem'

const PostList = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const res = await getPosts('/posts')
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      <h1>My Posts</h1><br />
      <div class='container-fluid'>
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default PostList
