var connection = require('../utils/connect'); // Assuming this is your database connection module

async function getAnimalsByInvertebrata(req, res, next) {
    try {
        const results = await new Promise((resolve, reject) => {
            // Example query to retrieve data from a hypothetical 'animal_list' table
            connection.query('SELECT * FROM animal_list WHERE backbone = 0', function(error, results, fields) {
                if (error) {
                    reject('Error fetching data from the database');
                    return;
                }
                resolve(results);
            });
        });

        if (results.length === 0) {
            res.status(404).json({ message: 'No data found' });
            return;
        }

        const animal_list = results.map(row => {
            return {
                id: row.id,
                name: row.name,
                class: row.class,
                habitat: row.habitat,
                lifespan: row.lifespan,
                height: row.height,
                weight: row.weight,
                food_class: row.food_class,
                backbone: !!row.backbone,
                description: row.description,
                sound: row.sound,
                // Add more fields as needed
            };
        });

        res.status(200).json({ animal_list });
    } catch (err) {
        console.error(`Error while getting animals `, err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    getAnimalsByInvertebrata
};
