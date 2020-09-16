var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/geomaticslivetwo-dev', function() {

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
            name: 'Landsat-8',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
        {
            name: 'Worldview-3',
            country: 'United States USGS',
            cover: 'https://fakeimg.pl/400x300/?text=Book',
            thumbnail: 'https://fakeimg.pl/150x150/?text=Book'
        },
    ]
}];