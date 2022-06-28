const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

//common name, scientific name, edible, environment, color
const mushrooms = {
    'unknown': {
        'commonName' : 'unknown',
        'scientificName' : 'unknown',
        'genus' : 'unknown',
        'features' : 'unknown',
        'edibility' : 'unknown',
        'image' : 'none'
    },
    'fly agaric': {
        'commonName' : 'Fly Agaric',
        'scientificName' : 'Amanita muscaria',
        'otherNames' : 'Fly Amanita',
        'features' : 'Bright red cap with white spots, white gills and veil.',
        'edibility' : 'poisonous, mildly hallucinogenic',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg'
    },
    'oyster': {
        'commonName' : 'Oyster',
        'scientificName' : 'Pleurotus ostreatus',
        'otherNames' : 'Pleurotus, Abalone, Tree Mushrooms',
        'features' : 'Cap laterally attached with no stipe or decurrent along gills. Can be white, golden or pink.',
        'edibility' : 'Edible',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/7/78/Pleurotus_pulmonarius_LC0228.jpg'
    },
    'shaggy ink cap': {
        'commonName' : 'Shaggy Ink Cap',
        'scientificName' : 'Coprinus comatus' ,
        'otherNames' : 'lawyers wig, shaggy mane',
        'features' : 'Caps are white and covered with scales. The gills beneath the cap are white, then turn black and secrete a black liquid filled with spores',
        'edibility' : 'Edible',
        'image' :'https://upload.wikimedia.org/wikipedia/commons/7/71/Tintlinge_5145.jpg'
    },
    'turkey tail': {
        'commonName' : 'Turkey Tail',
        'scientificName' : 'Trametes versicolor',
        'otherNames' : 'none',
        'features' : 'Small polypore with top surface of cap showign concentric zones of different colors, similar to those of a wild turkey',
        'edibility' : 'Medicinal',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Trametes_versicolor_G4_%281%29.JPG'
    },
    'king bolete': {
        'commonName' : 'King Bolete',
        'scientificName' : 'Boletus edulis',
        'otherNames' : 'porcini, cep, penny bun, porcino',
        'features' : 'Large brown cap which can reach 12 inches in diameter. Tubes extending downward from the underside of the cap rather than gills - white when young, ages to a greenish yellow.',
        'edibility' : 'Edible, Delicious',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg'
    },
    'lions mane': {
        'commonName' : 'Lions Mane',
        'scientificName' : 'Hericium erinaceus',
        'otherNames' : 'bearded tooth fungus, hedgehog mushroom, mountain-priest mushroom',
        'features' : 'Fruitbodies consist of large, irregular overlapping spines - unbranched and tips pointed down. White to cream in color',
        'edibility' : 'Edible, Medicinal',
        'image' : 'https://upload.wikimedia.org/wikipedia/commons/0/00/Igelstachelbart_Nov_06.jpg'
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:mushroomName', (request,response) => {
    const mushroomsName = request.params.mushroomName.toLowerCase()
    if(mushrooms[mushroomsName]){
        response.json(mushrooms[mushroomsName])
    } else {
        response.json(mushrooms['unknown'])
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})

