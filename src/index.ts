import { User } from './models/Users';

const user = new User({ });

user.on('change', () => console.log('change 1'));
user.on('change', () => console.log('change 2'));
user.on('save', () => console.log('save'));

user.trigger('save');