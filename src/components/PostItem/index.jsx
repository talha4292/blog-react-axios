import { Link } from 'react-router-dom'
import './styles.css'

const Post = ({ post, post: { user } }) => {
  return (
    <div>
      <div class='col-md-4'>
        <div class='card'>
          <div class='card-header'>
            <img class='rounded-circle' src={user.image ? user.image : require('../../assets/dp-avatar.jpg')} alt='img' width='25' height='25' />
            <small> {user.username}</small>
            <small class='approve-post'>({post.status})</small>
          </div>
          <div class='card-body'>
            <h5 class='card-title'>{post.title}</h5>
          </div>
          <Link to={`/posts/${post.id}`} class='stretched-link' />
        </div>
      </div><br />
    </div>
  )
}

export default Post
