import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import PostShow from './components/PostShow'
import NotFound from './components/NotFound'

function App () {
  return (
    <Router>
      <Navbar />
      <br /><br />
      <div class='container'>
        <Routes>
          <Route exact path='/' element={<PostList />} />
          <Route exact path='/posts' element={<PostList />} />
          <Route exact path='/posts/:id' element={<PostShow />} />
          <Route exact path='*' element={<NotFound type={'Page'}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
