import { showConnect } from '@stacks/connect';

// Define your app details
const appDetails = {
  name: 'sOrd Gate',
  icon: window.location.origin + '/Users/melophonic/Downloads/New\ Stacks\ Login\ Button/sOrdGate.png',
};

// Define the function to be called when the user clicks the "Connect Wallet" button
const connectWallet = async () => {
  showConnect({
    appDetails: appDetails,
    onFinish: () => {
      console.log('User successfully authenticated with Leather wallet');
      // Handle post-authentication logic here
    },
    // Add other options based on your requirements
  });
};

// Add event listener to the "Connect Wallet" button
document.getElementById('connectWalletButton').addEventListener('click', connectWallet);
