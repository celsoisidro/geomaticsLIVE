var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/geomaticslive', function() {

    // Load Mongoose models
    seeder.loadModels([
        './models/images.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Image'], function() {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function() {
            seeder.disconnect();
        });

    });
});

// Data array containing seed data - documents organized by Model
var data = [{
    'model': 'Image',
    'documents': [{
            name: 'Bike Trail',
            place: 'Newstead Terrace',
            cover: '/images/ttrail001.png',
            thumbnail: '/images/ttrail001.png'
        },
        {
            name: 'Hiking Trail',
            place: 'Mt. Cootha',
            cover: '/images/ttrail002.png',
            thumbnail: '/images/ttrail002.png'
        },
        {
            name: 'Bike Trail',
            place: 'New Farm',
            cover: '/images/ttrail003.png',
            thumbnail: '/images/ttrail003.png'
        },
        {
            name: 'Park and Library',
            place: 'Southbank',
            cover: '/images/ttrail004.png',
            thumbnail: '/images/ttrail004.png'
        },
        {
            name: 'Hiking Trail',
            place: 'Mt. Cootha',
            cover: '/images/ttrail005.png',
            thumbnail: '/images/ttrail005.png'
        },
        {
            name: 'Shorncliffe Pier',
            place: 'Shorncliffe',
            cover: '/images/ttrail006.png',
            thumbnail: '/images/ttrail006.png'
        },
        {
            name: 'Fishermans Horizon',
            place: 'Botanical Garden',
            cover: '/images/ttrail007.png',
            thumbnail: '/images/ttrail007.png'
        },
        {
            name: 'Botanical Garden',
            place: 'Cairns',
            cover: '/images/ttrail008.png',
            thumbnail: '/images/ttrail008.png'
        },
        {
            name: 'Opera House',
            place: 'Sydney',
            cover: '/images/ttrail009.png',
            thumbnail: '/images/ttrail009.png'
        },
        {
            name: 'Surfers Paradise',
            place: 'Gold Coast',
            cover: '/images/ttrail010.png',
            thumbnail: '/images/ttrail010.png'
        },
    ]
}];