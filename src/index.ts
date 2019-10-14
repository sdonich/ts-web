import { User } from './models/Users';

const user = new User({ id: 5, name: 'newer name', age: 999 });

user.on('save', () => {
  console.log(user);

})

user.save();