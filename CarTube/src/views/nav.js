import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';
import { logout } from '../api/user.js';


const nav = document.querySelector('header');

const navTemplate = (user) => html`
<nav>
<a class="active" href="/">Home</a>
<a href="/catalog">All Listings</a>
<a href="#">By Year</a>
${user ? html`
<div id="profile">
    <a>Welcome ${user.username}</a>
    <a href="/items">My Listings</a>
    <a href="/create">Create Listing</a>
    <a @click=${onLogout} href="javascript:void(0)">Logout</a>
</div>
</nav>
` : html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>
`}`;

export function updateNav() {
    const user = getUserData();
    render(navTemplate(user), nav)
}

function onLogout() {
    logout();
    updateNav();
    page.redirect('/catalog')
}