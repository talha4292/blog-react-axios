import { useState, useEffect } from 'react'
import getPosts from '../../api'
import PostItem from '../PostItem'
import Loader from '../Loader'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loader, setLoader] = useState(true)

  const fetchPosts = async () => {
    const res = await getPosts('/posts')
    setPosts(res.data)
    setLoader(false)
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
      {loader && <Loader />}
    </div>
  )
}

export default PostList
