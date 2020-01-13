[![Netlify Status](https://api.netlify.com/api/v1/badges/4ac1edc7-0c98-41dd-8589-84b7ab1f1d08/deploy-status)](https://app.netlify.com/sites/manifest-gen/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses [Netlify](https://www.netlify.com) for hosting.

This app helps to simplify the creation of your manifest.json file for your Progressive web app and also generates the required images in varying dimensions.

The Web App Manifest generator allows for specifying icons of varying sizes. Upload an image for the icon and it would generate the remaining sizes.
I wanted to make a little bench mark using graphql upload and plain express. so I ended up creating two servers:- 

 - A microservice using plain express
 - A microservice using the apollo-server-express middleware
Plain express.js ended up being faster. 

Since graphql only support few types excluding files. I had to convert the files to base64 string and also decode back in the client. 

I also didn't want to use redux for state management, so I ended up desgining my own state manager using the context and reduce hooks in React

Please feel free to make a pull request if you have any contribution or correction to make.
  

Below are the links to repo for the servers:

 - [express-server](https://github.com/sammychinedu2ky/manifest-server-express)
 - [graphql-server](https://github.com/sammychinedu2ky/manifest-server-graphql)




The sites link can be found [here](https://manifest-gen.netlify.com/)
---

  

