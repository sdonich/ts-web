import { User } from './models/Users';

const user = new User({ name: 'newRecord', age: 0 });

// user.save()
user.events.on('change', () => {
  console.log('change')
})

user.events.trigger('change');