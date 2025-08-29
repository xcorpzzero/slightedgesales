import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">SES</div>
            <span className="logo-text">Revenue Architect</span>
          </div>
          
          <nav className="navigation">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <div className="nav-dropdown">
              <a href="#services" className="nav-link">Services <span className="dropdown-arrow">▼</span></a>
            </div>
            <div className="nav-dropdown">
              <a href="#partners" className="nav-link">Partners <span className="dropdown-arrow">▼</span></a>
            </div>
          </nav>
          
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <div className="tagline-badge">
            Fractional Chief Revenue Architect
          </div>
          
          <h1 className="hero-headline">
            In the Architecture of Revenue,<br />
            <span className="highlight">Every Slight Edge Matters</span>
          </h1>
          
          <p className="hero-paragraph">
            I craft systems that bridge silos, automate chaos, and forge paths to scalable growth. 
            Drawing from years inside organizations—navigating leadership pitfalls, mending fractured teams, 
            and engineering turnarounds.
          </p>
          
          <p className="hero-paragraph">
            Imagine your business as a narrative unfolding—one where miscommunications become seamless dialogues, 
            outdated processes evolve into AI-driven efficiencies, and revenue flows predictably.
          </p>
          
          <div className="cta-buttons">
            <button className="primary-cta">
              Schedule a Discovery Call →
            </button>
            <button className="secondary-cta">
              Contact Me
            </button>
          </div>
          
          <div className="trust-statement">
            TRUSTED BY FORWARD-THINKING BUSINESSES
          </div>
          
          <div className="scroll-indicator">
            <div className="scroll-icon">↓</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;