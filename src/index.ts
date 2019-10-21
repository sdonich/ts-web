import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log('user[]', collection)
})

collection.fetch();

