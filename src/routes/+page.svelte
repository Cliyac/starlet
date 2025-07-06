<script lang="ts">
  // You can update the image path if you use a different filename
  import heroImg from '../assets/children.jpg';
</script>

<style>
/* .page-container {
  background: #222;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
} */

.navbar {
  width: 100%;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3vw;
  height: 90px;
  box-sizing: border-box;
  margin-bottom: 0;
}

.logo {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 1px;
  color: #111;
}

.nav-links {
  display: flex;
  gap: 3vw;
}

.nav-link {
  color: #222;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-link:hover {
  color: #4caf50;
}

.hero {
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f7f7f7;
  padding-bottom: 2rem;
}

.hero-img-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
}

.hero-text-overlay {
  position: absolute;
  top: 80%;
  left: 20%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  width: 100%;
  pointer-events: none;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 0;
}

.hero-content-below {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0 1.5rem 0;
  width: 100%;
}

.btn {
  padding: 0.9rem 2.5rem;
  font-size: 1.3rem;
  border-radius: 2rem;
  border: 2px solid #222;
  background: #fff;
  color: #222;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border 0.2s;
}
.btn.primary {
  background: #4caf50;
  color: #fff;
  border: none;
}
.btn.primary:hover {
  background: #388e3c;
}
.btn:hover {
  background: #f0f0f0;
  color: #111;
}

.create-link {
  color: #4caf50;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 0.3rem;
}
.create-link:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.5rem;
  }
  .hero-content {
    padding: 1rem 0.5rem 1.5rem 0.5rem;
  }
  .navbar {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;
    padding: 1rem 0.5rem;
  }
  .nav-links {
    gap: 1.2rem;
  }
}
</style>

<div class="page-container">
  <nav class="navbar">
    <div class="logo">Unite</div>
    <div class="nav-links">
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="#">Institutions</a>
      <a class="nav-link" href="#">Events</a>
      <a class="nav-link" href="#">Space</a>
      <a class="nav-link" href="#">About</a>
    </div>
  </nav>

  <section class="hero">
    <div class="hero-img-container">
      <img class="hero-img" src={heroImg} alt="Inclusive classroom" />
      <div class="hero-text-overlay">
        <div class="hero-title">Everyone Belong Here.</div>
        <div class="hero-subtitle">Platform for lora lipsum blah balh</div>
      </div>
    </div>
    <div class="hero-content-below">
      <div class="hero-buttons">
        <a href="/login"><button class="btn primary">Sign in</button></a>
        <a href="#"><button class="btn">Explore</button></a>
      </div>
      <div>
        Don't have an account?
        <a class="create-link" href="/signup">Create now</a>
      </div>
    </div>
  </section>
</div>
