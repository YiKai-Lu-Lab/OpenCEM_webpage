document.addEventListener('DOMContentLoaded', function() {
    const isIndexPage = window.location.pathname.endsWith('/index.html') || 
                      window.location.pathname.endsWith('/');
    
    // define navbar
    const navItems = [
        { text: 'Home', href: `${isIndexPage ? '' : '../'}index.html` },
        { text: 'Introduction', href: `${isIndexPage ? 'pages/' : ''}introduction.html` },
        { text: 'Our Team', href: `${isIndexPage ? 'pages/' : ''}our_team.html` },
        { text: 'Demo', href: `${isIndexPage ? 'pages/' : ''}demo.html` },
        { text: 'Contact us', href: `${isIndexPage ? 'pages/' : ''}contact.html` }
    ];

    // navbar html
    const navHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="${isIndexPage ? '' : '../'}index.html" class="logo">
                <img src="${isIndexPage ? 'images/' : '../images/'}logo.jpg" 
                     alt="OpenCEM Logo"
                     class="nav-logo">
            </a>
            <ul class="nav-links">
                ${navItems.map(item => `
                    <li><a href="${item.href}" class="nav-link">${item.text}</a></li>
                `).join('')}
            </ul>
        </div>
    </nav>`;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
