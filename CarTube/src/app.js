import { page, render } from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { updateNav } from './views/nav.js'
import { showLogin } from './views/login.js';




const main = document.getElementById('site-content');

page(decorateContext);
page('/', showHome);
// page('/catalog', showCatalog);
// page('/catalog/:id', showDetails);
// page('/edit/:id', showEdit);
// page('/create', showCreate);
page('/login', showLogin);
// page('/register', showRegister);

updateNav();
page.start();


function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();

    if (user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}