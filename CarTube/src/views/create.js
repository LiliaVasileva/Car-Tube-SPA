import { html, render } from '../lib.js'
import { createCar } from '../api/data.js'
import { createSubmitHandler } from '../util.js'



const createCarTemplate = (onCreate) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onCreate} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>
`;



export function showCreate(ctx) {

    ctx.render(createCarTemplate(createSubmitHandler(onCreate)));

    async function onCreate({ brand, model, description, year, imageUrl, price }, form) {

        if ([brand, model, description, year, imageUrl, price].some(e => e == '')) {
            return alert('All fields are required');
        }

        await createCar(
            {
                brand,
                model,
                description,
                year,
                imageUrl,
                price
            });
        form.reset();
        ctx.page.redirect('/catalog');
    }
}