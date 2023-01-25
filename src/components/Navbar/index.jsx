import './styles.css'

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg bg-light'>
      <div class='container-fluid'>
        <a class='navbar-brand lead logo-size' href='/'>
          <img
            className='logo'
            src={require('../../assets/logo.png')}
            alt='Burger Builder'
            width='50' height='50'
          /> Bloggy
        </a>
        <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
