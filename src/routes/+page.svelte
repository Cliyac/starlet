<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  // Images and icons
  import heroImg1 from '../assets/children1.jpg';
  import heroImg2 from '../assets/children 2.jpg';
  import logo from '../assets/logo.svg';
  import event1 from '../assets/event1.jpg';
  import event2 from '../assets/event2.jpg';
  import event3 from '../assets/event3.jpg';
  import wheelchair from '../assets/wheelchair.png';
  import signLanguage from '../assets/sign language.png';
  import calender from '../assets/calender.png';
  import uniteLogo from '../assets/logo.svg';
  import oppamLogo from '../assets/oppam.png';
  import colourblindlyLogo from '../assets/colourblindly.png';
  import oppamIcon from '../assets/sign language.png';
  import eyeIcon from '../assets/wheelchair.png'; // fallback
  import searchIcon from '../assets/search.png';

  // Hero content
  const hero = {
    title: 'Everyone Belong Here.',
    subtitle: 'A platform where the beauty in difference is embraced',
    signIn: '/login',
    explore: '#',
    signup: '/signup',
  };

  const heroImages = [heroImg1, heroImg2];
  let currentHero = 0;
  let intervalId: any;

  // Organisations data (with links)
  const organisations = [
    {
      name: 'Mind Empowered',
      location: 'South India',
      desc: 'Org. organisation focus: Mental well-being and inclusive education for children.',
      link: 'https://mind-empowered.org/',
    },
    {
      name: 'Sangath',
      location: 'India',
      desc: 'Org. organisation focus: Supporting people with mental health and neurodevelopmental needs.',
      link: 'https://www.sangath.in/',
    },
    {
      name: 'LonePack',
      location: 'Tamil Nadu',
      desc: 'Org. organisation focus: Mental health awareness and support.',
      link: 'https://www.lonepack.org/#home',
    },
  ];

  // Events data (all link to the same event URL)
  const eventUrl = 'http://starlet.mind-empowered.org/';
  const events = [
    {
      title: 'STARLET HACKATHON 4.0 FOR GIRL STUDENTS',
      date: '5, 6 JUNE',
      desc: 'Hackathon for girl students and gender minorities, solving problems of inclusivity',
      img: event1,
      icons: [wheelchair, signLanguage],
      link: eventUrl,
    },
    {
      title: 'DESIGN THINKING - STARLET 4.0 PRE-EVENT',
      date: '20 JUNE',
      desc: 'Hackathon for girl students and gender minorities, solving problems of inclusivity',
      img: event2,
      icons: [wheelchair, signLanguage],
      link: eventUrl,
    },
    {
      title: 'LOW CODE NO CODE - STARLET 4.0 PRE-EVENT',
      date: '27 JUNE',
      desc: 'Hackathon for girl students and gender minorities, solving problems of inclusivity',
      img: event3,
      icons: [wheelchair, signLanguage],
      link: eventUrl,
    },
  ];

  // Support contacts
  const contacts = [
    { label: 'Child Helpline', number: '1098' },
    { label: 'Report Violence', number: '109831' },
    { label: 'General Support Mentally', number: '109823' },
    { label: 'General Support Mentally', number: '10123' },
    { label: 'General Support', number: '1098222' },
  ];

  // Space projects/tools data
  let spaceSearch = '';
  const spaceProjects = [
    {
      title: 'LexiLoop: Tackle Dyslexia',
      desc: 'Do you have Dyslexia? Improve writing with this tool :)',
      icon: uniteLogo,
      link: '#',
    },
    {
      title: 'Oppam: Share your worries',
      desc: 'Share your worries with Mind Empowered, with their digital diary where you can access both anonymously and other.',
      icon: oppamLogo,
      link: '#',
    },
    {
      title: 'Colorblindly: Brower Extension',
      desc: 'Download the browser extension to help people with color blindness experience a website better',
      icon: colourblindlyLogo,
      link: '#',
    },
  ];

  let isOrg = false;
  let showPrompt = false;

  function speakPrompt() {
    const promptText = "Press F if you need read aloud. Else press X.";
    const utterance = new window.SpeechSynthesisUtterance(promptText);
    window.speechSynthesis.speak(utterance);
  }

  onMount(() => {
    console.log('userType in localStorage:', localStorage.getItem('userType'));
    isOrg = localStorage.getItem('userType') === 'organization';
    const userType = localStorage.getItem('userType');
    if (!userType) {
      showPrompt = true;
      // Speak the prompt as soon as it appears
      speakPrompt();
      const handleKey = (e: KeyboardEvent) => {
        if (showPrompt) {
          if (e.key.toLowerCase() === 'f') {
            showPrompt = false;
            window.removeEventListener('keydown', handleKey);
            // Optionally, you can start reading the whole page here
          } else if (e.key.toLowerCase() === 'x') {
            showPrompt = false;
            window.removeEventListener('keydown', handleKey);
          }
        }
      };
      window.addEventListener('keydown', handleKey);
    }
    intervalId = setInterval(() => {
      currentHero = (currentHero + 1) % heroImages.length;
    }, 4000); // 4 seconds
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<style>
.page-container {
  background: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navbar {
  width: 100vw;
  max-width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3vw;
  height: 90px;
  box-sizing: border-box;
  margin-bottom: 0;
  border-bottom: 1px solid #eee;
}
.logo {
  display: flex;
  align-items: center;
  height: 50px;
}
.logo img, .logo svg {
  height: 40px;
  width: auto;
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
  max-width: 100vw;
  position: relative;
  margin-bottom: 0;
}
.hero-img-container {
  position: relative;
  width: 100vw;
  max-width: 100vw;
  height: 750px;
  overflow: hidden;
}
.hero-img {
  width: 100vw;
  height: 750px;
  object-fit:cover;
  display: block;
}
.hero-text-overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2rem 2.5rem;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
  z-index: 2;
  pointer-events: none;
  box-sizing: border-box;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #fff;
  text-align: left;
}
.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 0;
  color: #fff;
  text-align: left;
}
.hero-content-below {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding-bottom: 2rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
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

.section {
  width: 100vw;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  padding: 2rem 1rem 1rem 1rem;
  background: #f7f7f7;
  border-radius: 20px;
  box-sizing: border-box;
}
.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #222;
}
.section-desc {
  color: #444;
  margin-bottom: 2rem;
}
.org-cards {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.org-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1.5rem 1.2rem;
  min-width: 220px;
  max-width: 300px;
  flex: 1 1 220px;
  border: 2px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.org-card strong {
  font-size: 1.1rem;
  color: #222;
}
.org-card .org-location {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 0.5rem;
}
.org-card .org-desc {
  font-size: 0.98rem;
  color: #444;
  margin-bottom: 1rem;
}
.org-card .org-link {
  margin-top: auto;
  color: #4caf50;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid #4caf50;
  border-radius: 8px;
  padding: 0.3rem 1.2rem;
  transition: background 0.2s, color 0.2s;
  font-size: 1rem;
}
.org-card .org-link:hover {
  background: #4caf50;
  color: #fff;
}

.events-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.events-title {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
}
.events-date-range {
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
}
.event-cards {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.event-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1.2rem;
  border: 1.5px solid #bdbdbd;
}
.event-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
}
.event-info {
  flex: 1;
}
.event-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.2rem;
}
.event-date {
  font-size: 1rem;
  color: #4caf50;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.event-desc {
  font-size: 0.98rem;
  color: #444;
  margin-bottom: 0.2rem;
}
.event-icons {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.3rem;
}
.event-icon {
  width: 22px;
  height: 22px;
}

.space-section {
  width: 100vw;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  padding: 2rem 1rem 1rem 1rem;
  background: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.space-title {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
  text-align: center;
}
.space-desc {
  color: #444;
  margin-bottom: 1.5rem;
  text-align: center;
}
.space-search-bar-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.space-search-bar {
  width: 320px;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  position: relative;
  justify-content: flex-start;
  margin-left: 0;
}
.space-search-icon {
  position: absolute;
  left: 14px;
  z-index: 2;
  display: flex;
  align-items: center;
  height: 100%;
}
.space-search-icon img {
  width: 18px;
  height: 18px;
  opacity: 0.7;
}
.space-search-input {
  width: 100%;
  padding: 0.7rem 1.2rem 0.7rem 2.3rem;
  border-radius: 2rem;
  border: 1.5px solid #bdbdbd;
  font-size: 1rem;
  background: #f7f7f7;
  outline: none;
  transition: border 0.2s;
}
.space-search-input:focus {
  border: 1.5px solid #4caf50;
}
.space-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
}
.space-card {
  background: #fafafa;
  border: 2px solid #bdbdbd;
  border-radius: 16px;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s, border 0.2s;
}
.space-card:hover {
  border: 2px solid #4caf50;
  box-shadow: 0 4px 16px rgba(76,175,80,0.08);
}
.space-card-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.space-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.2rem;
}
.space-card-desc {
  font-size: 1rem;
  color: #444;
}
.space-card-icon {
  width: 40px;
  height: 40px;
  margin-left: 1.2rem;
  flex-shrink: 0;
}
.space-contribute-btn {
  position: absolute;
  right: 1.5rem;
  bottom: 1.2rem;
  padding: 0.7rem 1.5rem;
  border-radius: 2rem;
  border: 1.5px solid #222;
  background: #fff;
  color: #222;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: background 0.2s, color 0.2s, border 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.space-contribute-btn:hover {
  background: #4caf50;
  color: #fff;
  border: 1.5px solid #4caf50;
}

.support-section {
  width: 100vw;
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  padding: 2rem 1rem 1rem 1rem;
  background: #fff;
  border-radius: 20px;
  box-sizing: border-box;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.support-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
}
.support-desc {
  color: #444;
  margin-bottom: 1.2rem;
}
.support-contacts {
  margin-bottom: 1.2rem;
}
.support-contact {
  font-size: 1rem;
  margin-bottom: 0.2rem;
}
.support-contact strong {
  color: #222;
}
.support-box {
  width: 100%;
  background: #f7f7f7;
  border: 2px solid #bdbdbd;
  border-radius: 16px;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.1rem;
}

.footer {
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2vw;
  font-size: 1rem;
  color: #222;
  border-top: 1px solid #eee;
  margin-top: 2rem;
}
.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5 rem;
  font-weight: 700;
  font-size: 1.2rem;
}
.footer-heart {
  color: #e53935;
  font-size: 1.2rem;
}
@media (max-width: 900px) {
  .org-cards {
    flex-direction: column;
    gap: 1.2rem;
  }
  .section, .space-section, .support-section {
    max-width: 98vw;
    padding: 1rem 0.2rem 1rem 0.2rem;
  }
  .footer {
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.95rem;
  }
}
@media (max-width: 700px) {
  .space-section {
    max-width: 98vw;
    padding: 1rem 0.2rem 1rem 0.2rem;
  }
}
.read-aloud-prompt {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 9999;
  background: #222;
  color: #fff;
  font-size: 1.2rem;
  padding: 1.2rem 0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
</style>

<div class="page-container">
  <!-- Navbar -->
  <nav class="navbar">
    <div class="logo"><img src={logo} alt="Logo" /></div>
    <div class="nav-links">
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="#">Institutions</a>
      <a class="nav-link" href="#">Events</a>
      <a class="nav-link" href="#">Space</a>
      <a class="nav-link" href="#">About</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-img-container">
      <img class="hero-img" src={heroImages[currentHero]} alt="Inclusive classroom" />
      <div class="hero-text-overlay">
        <div class="hero-title">{hero.title}</div>
        <div class="hero-subtitle">{hero.subtitle}</div>
      </div>
    </div>
    <div class="hero-content-below">
      <div class="hero-buttons">
        <a href={hero.signIn}><button class="btn primary">Sign in</button></a>
        <a href={hero.explore}><button class="btn">Explore</button></a>
      </div>
      <div>
        Don't have an account?
        <a class="create-link" href={hero.signup}>Create now</a>
      </div>
    </div>
  </section>

  <!-- Organisations Section -->
  <section class="section">
    <div class="section-title">Organisations</div>
    <div class="section-desc">Here are a list of all the organisations based in India that advocate disabilities, mental, physical and beyond.</div>
    <div class="org-cards">
      {#each organisations as org}
        <div class="org-card">
          <strong>{org.name}</strong>
          <div class="org-location">{org.location}</div>
          <div class="org-desc">{org.desc}</div>
          <a class="org-link" href={org.link} target="_blank">Visit them</a>
        </div>
      {/each}
    </div>
  </section>

  <!-- Events Section -->
  <section class="section">
    <div class="events-header">
      <div class="events-title">Events</div>
      <div class="events-date-range">JUNE–JULY</div>
    </div>
    <div class="event-cards">
      {#each events as event}
        <a href={event.link} class="event-card" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
          <img class="event-img" src={event.img} alt={event.title} />
          <div class="event-info">
            <div class="event-title">{event.title}</div>
            <div class="event-date"><img src={calender} alt="calendar" style="width:18px;height:18px;vertical-align:middle;margin-right:4px;" /> {event.date}</div>
            <div class="event-desc">{event.desc}</div>
            <div class="event-icons">
              {#each event.icons as icon}
                <img class="event-icon" src={icon} alt="accessibility" />
              {/each}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- Space Section -->
  <section class="space-section">
    <div class="space-title">SPACE</div>
    <div class="space-desc">Here is the space where everyone can contribute their accessibility tools such that everyone - worldwide can access it in an unified platform. Unite has many space continuations as well.</div>
    <div class="space-search-bar-wrapper">
      <div class="space-search-bar">
        <span class="space-search-icon">
          <img src={searchIcon} alt="search" />
        </span>
        <input
          class="space-search-input"
          type="text"
          placeholder="Search your need"
          bind:value={spaceSearch}
        />
      </div>
    </div>
    <div class="space-cards">
      {#each spaceProjects.filter(p => p.title.toLowerCase().includes(spaceSearch.toLowerCase()) || p.desc.toLowerCase().includes(spaceSearch.toLowerCase())) as project}
        <div class="space-card">
          <div class="space-card-content">
            <div class="space-card-title">{project.title}</div>
            <div class="space-card-desc">{project.desc}</div>
          </div>
          <img class="space-card-icon" src={project.icon} alt="icon" />
        </div>
      {/each}
    </div>
    {#if isOrg}
      <button class="space-contribute-btn">Contribute Projects <span style="font-size:1.3rem;">+</span></button>
    {/if}
  </section>

  <!-- Support Section -->
  <section class="support-section">
    <div class="support-title">Support <span class="footer-heart">❤️</span></div>
    <div class="support-desc">Incases you need help by staying anonymous or help for conslution or support for any measure or have issues of ragging or bullying to report</div>
    <div class="support-contacts">
      {#each contacts as c}
        <div class="support-contact"><strong>CONTACT:</strong> {c.number} {c.label}</div>
      {/each}
    </div>
    <div class="support-box">You are heard, seen and known. We are always here to listen to you.<br/> <a href="#">Text Anonymously</a></div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div>Made with <span class="footer-heart">♥</span></div>
    <div class="footer-logo"><img src={logo} alt="Logo" style="height: 28px;" /> Unite</div>
    <div>Made with Svelte</div>
  </footer>

  {#if showPrompt}
    <div class="read-aloud-prompt">
      Press <b>F</b> if you need read aloud. Else press <b>X</b>
    </div>
  {/if}
</div>
