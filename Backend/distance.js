const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.post('/distance', async (req, res) => {
    const { source, destination } = req.body;

    const url = 'https://distanceto.p.rapidapi.com/distance/route/detailed';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '7d4ea70568mshf533f2d36c95d05p1b208bjsn8eeb57519e40',
            'x-rapidapi-host': 'distanceto.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            route: [
                { country: 'IND', name: source },
                { country: 'IND', name: destination }
            ]
        }
    };

    try {
        const response = await axios(url, options);
        const distance = response.data.route.car.distance; // Adjust according to the response structure

        // Calculate prices
        const uberPrice = (distance * 8.4).toFixed(2);
        const olaPrice = (distance * 9.2).toFixed(2);
        let rapidoPrice = distance <= 30 ? (distance * 7.5).toFixed(2) : 'N/A';

        res.status(200).json({
            Distance: distance,
            Uber: uberPrice,
            Ola: olaPrice,
            Rapido: rapidoPrice
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to retrieve distance or calculate prices." });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
