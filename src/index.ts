import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'John', age: 200 })
const root = document.getElementById('root');

if (root) {
  const userEdit = new UserEdit(
    root,
    user
  );

  userEdit.render();
} else {
  throw new Error('Root element not found');
}
