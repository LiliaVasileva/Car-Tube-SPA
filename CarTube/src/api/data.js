import { del, get, post, put } from "./api.js";

export async function getAll(){
    return get('/data/cars?sortBy=_createdOn%20desc');
}


export async function getById(id){
    return get('/data/cars' + id);
}



export async function deleteById(id){
    return del('/data/cars' + id);
}


export async function createCar(carData){
    return post('/data/cars', carData);
}

export async function editCar(id, carData){
    return put('/data/cars' + id, carData);
}