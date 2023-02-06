
const url = "https://raw.githubusercontent.com/Atharv-Joshi-CS/DataSets/main/E-Commerce-Website/products.json";

const getData = () => fetch(url)
.then(
    (response) => {
        return response.json()
    }
)
.then(
    (data) => {
        return data;
    }
)
.catch(
    (error) => {
        return error;
    }
);

export {getData};