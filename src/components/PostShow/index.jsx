import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getPosts from '../../api'
import './styles.css'
import RichTextRenderer from '../RichTextRenderer'
import { FaRegComment, FaRegFlag, FaRegHeart } from 'react-icons/fa'
import NotFound from '../../components/NotFound'
import Loader from "../Loader";

const PostShow = () => {
  const [post, setPost] = useState({})
  const [loader, setLoader] = useState(true);
  const { id } = useParams()

  const fetchPost = async () => {
    const res = await getPosts(`/posts/${id}`)
    setPost(res.data)
    setLoader(false);
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      { post.id && <div>
        <img class='rounded-circle' src={post.user.image ? post.user.image : require('../../assets/dp-avatar.jpg')} alt='img' width='50' height='50' />
        <b class='lead'><b> {post.user.username}</b></b>
        <hr />

        <h1 class='title-style'>
          {post.title}
        </h1><br />
        <img src={post.image} alt='img' width='200' height='200' /><br />

        <p>
          <RichTextRenderer content={post.text} />
        </p><br />

        <span>
          {post.likes.length} <FaRegHeart className='icon-color' />
        </span>

        <p class='icon-margin inline-style'>
          <span>
            {post.comments.length} <FaRegComment className='icon-color' />
          </span>

        </p>

        <p class='icon-margin inline-style'>
          <FaRegFlag className='icon-color' />
        </p>

        <br /><br /><br />
      </div>}  
      {!post.id && !loader && <NotFound type={'Data'}/>}
      {loader && <Loader />}
    </div>
  )
    
}

export default PostShow
