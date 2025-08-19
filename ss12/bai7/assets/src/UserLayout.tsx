import './App.css'

function App() {
  return (
    <>
    <div className="user-layout">
      <header className="header">Header</header>
      <nav className="navbar">Navigation</nav>
      <div className="content">
        <aside className="menu">Menu</aside>
        <main className="main">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="cart" key={index}>
              Cart
            </div>
          ))}
        </main>
        <aside className="article">Article</aside>
      </div>
    </div>
    </>
  )
}

export default App
