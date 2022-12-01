import { page, render, html } from './lib.js';
import { getUserData } from './util.js';
import { showHome } from './views/home.js';
import { updateNav } from './views/nav.js'
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showCreate } from './views/create.js';
import { getUserItems } from './api/data.js';





const main = document.getElementById('site-content');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/edit/:id', showEdit);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);
page('/items', showItems);


const userCarsTemplate = (cars) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
    ${cars.length == 0 ? html`
    <p class="no-cars"> You haven't listed any cars yet.</p>`
     : cars.map( (car) => html`
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${car.year}</h3>
            <h3>Price: ${car.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/catalog/${car._id}" class="button-carDetails">Details</a>
        </div>
    </div>
    </div>
`)}
    </div>
</section>
`;

async function showItems(ctx) {
    const id = ctx.user._id
    const cars = await getUserItems(id);
    ctx.render(userCarsTemplate(cars))
}


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