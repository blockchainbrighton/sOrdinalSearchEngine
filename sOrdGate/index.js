import { showConnect } from '@stacks/connect';
import { userSession } from './userSession';

const myAppName = 'My Stacks Web-App'; // shown in wallet pop-up
const myAppIcon = window.location.origin + ''; // shown in wallet pop-up

showConnect({
  userSession, // `userSession` from previous step, to access storage
  appDetails: {
    name: myAppName,
    icon: myAppIcon,
  },
  onFinish: () => {
    window.location.reload(); // WHEN user confirms pop-up
  },
  onCancel: () => {
    console.log('oops'); // WHEN user cancels/closes pop-up
  },
});