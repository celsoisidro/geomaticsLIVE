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
            name: 'Brisbane City-1',
            country: 'United States USGS',
            cover: '/images/lmark001.png',
            thumbnail: '/images/lmark001.png'
        },
        {
            name: 'Brisbane City-2',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Brisbane City-3',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Brisbane City-4',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Brisbane City-5',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Brisbane City-6',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Brisbane City-7',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Brisbane City-8',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Brisbane City-9',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Brisbane City-10',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
    ]
}];