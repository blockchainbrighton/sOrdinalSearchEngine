import { AppConfig, UserSession, showConnect } from '@stacks/connect';


document.addEventListener('DOMContentLoaded', function() {
    const appConfig = new Stacks.AppConfig(['store_write']);
    const userSession = new Stacks.UserSession({ appConfig });

    const appDetails = {
        name: "Hello Stacks",
        icon: "https://freesvg.org/img/1541103084.png"
    };

    document.getElementById('connectWalletButton').addEventListener('click', function() {
        Stacks.showConnect({
            appDetails: appDetails,
            onFinish: () => {
                window.location.reload();
            },
            userSession: userSession
        });
    });

    function checkAuthStatus() {
        if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then(userData => {
                console.log('User data:', userData);
                // Here you can redirect the user or update the UI accordingly
            });
        } else if (userSession.isUserSignedIn()) {
            const userData = userSession.loadUserData();
            console.log('User is already signed in:', userData);
            // Update UI to reflect that the user is signed in
        }
    }

    checkAuthStatus();
});
