import { User } from './models/Users';

const user = User.buildUser({id: 1});

user.on('change', () => {
  console.log('myuser', user)
})

user.fetch();