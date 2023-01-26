import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, PostList, PostShow, NotFound } from './components/Components'

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
          <Route path='*' element={<NotFound type='Page' />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
