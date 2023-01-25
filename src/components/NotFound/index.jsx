import './styles.css'

const NotFound = (props) => {
  return(
    <div class='not-found'>
      <h1>Error</h1>
      <h2>{props.type} Not Found</h2>
    </div>
  )
}

export default NotFound