import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import PostShow from './components/PostShow'

function App () {
  return (
    <Router>
      <Navbar />
      <br /><br />
      <div class='container'>
        <Routes>
          <Route exact path='/' element={<PostList />} />
          <Route index path='/posts' element={<PostList />} />
          <Route exact path='/posts/:id' element={<PostShow />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
