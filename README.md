This project now handles all file and image manipulation directly on the client, eliminating the need for server-side processing. You can clone the front end to use locally.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4ac1edc7-0c98-41dd-8589-84b7ab1f1d08/deploy-status)](https://app.netlify.com/sites/manifest-gen/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses [Netlify](https://www.netlify.com) for hosting.

This app helps to simplify the creation of your manifest.json file for your Progressive web app and also generates the required images in varying dimensions.

The Web App Manifest generator allows for specifying icons of varying sizes. Upload an image for the icon and it will generate the remaining sizes directly in the browser.

I also didn't want to use redux for state management, so I ended up designing my own state manager using the context and reduce hooks in React.

Please feel free to make a pull request if you have any contribution or correction to make. I actually tried to clone this [site](https://app-manifest.firebaseapp.com/) using react with some extra tweaks.

The site link can be found [here](https://manifest-gen.netlify.com/).



