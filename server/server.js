const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const restaurants = [
	{
		id: 0,
		name: "Paddy's Irish Pub",
		cost: 1,
		deliveryTime: "15-60 Min",
		stars: 2,
		photo: "https://hopewelldowntown.com/wp-content/uploads/paddys1-1-768x576.jpg",
		cuisine: "Burgers - Drinks",
	},
	{
		id: 1,
		name: "Big Wiggie's Hogies",
		cost: 3,
		deliveryTime: "10-15 Min",
		stars: 4.5,
		photo: "https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2015/03/05/Food/Images/Food0461425573672.jpg",
		cuisine: "Sandwiches",
	},
	{
		id: 2,
		name: "Bob's Burgers",
		cost: 1,
		deliveryTime: "15-25 Min",
		stars: 5,
		photo: "https://www.pngitem.com/pimgs/m/26-260083_burger-from-bob-s-burgers-png-download-burger.png",
		cuisine: "Burgers - American",
	},
	{
		id: 3,
		name: 'Good Burger',
		cost: 1,
		deliveryTime: "4-20 Min",
		stars: 3,
		photo: "https://tostadamagazine.com/wp-content/uploads/2019/02/IMG_2447.jpg",
		cuisine: "Burgers - American - Fast Food",
	},
	{
		id: 4,
		name: 'The Three Broomsticks',
		cost: 2,
		deliveryTime: "5-10 min",
		stars: 4.5,
		photo: "https://i.pinimg.com/originals/43/ac/3c/43ac3c9d600f9669dc7cc2419efdc832.jpg",
		cuisine: "European - Family Style - Drinks",
	},
	{
		id: 5,
		name: "Gusteau's",
		cost: 3,
		deliveryTime: "20-30 Min",
		stars: 5,
		photo: "https://cdn-aknaj.nitrocdn.com/PFEAbCYRvuLjHEXqHQMsZiJHBmMNZybo/assets/static/optimized/rev-f4a779e/wp-content/uploads/2020/06/remys-ratatouille-recipe.jpg",
		cuisine: "Italian - Fancy",
	},
];

const pizza = [];

app.get('/api/restaurants', (req, res) => {
	res.status(200).json(restaurants.map(({ id, name, cost, deliveryTime, stars, photo }) => ({ id, name, cost, deliveryTime, stars, photo })));
});

app.post('/api/pizza', (req,res) => {
	console.log(req)
	pizza.push(req.body)
	res.status(201).json(req.body)
})

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
