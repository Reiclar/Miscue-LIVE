function goToRandomPage() {
  const pages = [
    'projectshtml/infooverload.html',
    'projectshtml/nn.html',
    'projectshtml/nunchi.html',
    'projectshtml/pidgnquest.html',
    'projectshtml/src.html'
  ];

  const randomIndex = Math.floor(Math.random() * pages.length);
  const randomPage = pages[randomIndex];

  window.location.href = randomPage;
}
