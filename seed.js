const {sequelize} = require('./db')
//const {Band, Musician} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Band} = require('./models/Band')
const {Musician} = require('./models/Musician')

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedBand = [
  {
    name: 'Jackson 5',
    genre: 'Pop',
    members: 5,
    albums: 16,
    hits: 13,

  },
  {
    name: 'Earth Wind & Fire',
    genre: 'R&B/Soul',
    members: 8,
    albums: 21,
    hits: 32,
  },
  {
    name: 'The Gap Band',
    genre: 'R&B/Soul',
    members: 3,
    albums: 2,
    hits: 3,

  },
  {
    name: 'Commodores',
    genre: 'R&B/Soul',
    members: 6,
    albums: 39,
    hits: 20,
  },

]

const seedMusician = [
  {
    name: 'Michael Jackson',
    genre: 'Pop',
    instrument: 'piano',
    albums: 31,
  },
  {
    name: 'Lionel Richie',
    genre: 'R&B/Soul',
    instrument: 'piano',
    albums: 31,
  },
  {
    name: 'Charlie Wilson',
    genre: 'R&B/Soul',
    instrument: 'piano',
    albums: 31,
  },
  { name: 'Maurice White',
    genre: 'R&B/Soul',
    instrument: 'drums',
    albums: 31,
    },
    { name: 'Verdine White',
    genre: 'R&B/Soul',
    instrument: 'base guitar',
    albums: 31,
    }
]


//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Band.bulkCreate(seedBand, {validate: true})
    await Musician.bulkCreate(seedMusician, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })