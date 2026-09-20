const hamburgerBtn = document.getElementById('hamburger-btn');
const sideNavPanel = document.getElementById('side-nav-panel');
const cancelBtn = document.getElementById('close-btn');

hamburgerBtn.addEventListener('click', () => {
    sideNavPanel.classList.remove('visually-hidden');
});

cancelBtn.addEventListener('click', () => {
    sideNavPanel.classList.add('visually-hidden');
});