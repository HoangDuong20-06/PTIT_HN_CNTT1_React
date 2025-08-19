import "./App.css";

function AdminIndex() {
  return (
    <div className="admin-container">
      <header className="header">Header</header>

      <div className="content">
        <aside className="menu">Menu</aside>
        <div className="right">
          <main className="main">Main</main>
          <footer className="footer">Footer</footer>
        </div>
      </div>
    </div>
  );
}

export default AdminIndex;
