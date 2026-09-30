const currentPath = location.pathname
    .replace(/index\.html$/, '')
    .replace(/\/?$/, '/');

document.querySelectorAll('.navbar .nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});