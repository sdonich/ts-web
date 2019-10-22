import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserList } from './views/UserList';
// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';

// const user = User.buildUser({ name: 'John', age: 200 })
// const root = document.getElementById('root');
// if (root) {
//   const userEdit = new UserEdit(
//     root,
//     user
//   );
//   userEdit.render();
// } else {
//   throw new Error('Root element not found');
// }

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
})

users.fetch();
