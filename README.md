# React front setup (React.js + Next.js)

This project set up is a must-have for server side rendering web applications, this setup provide default SSR intigration with bootstrap and Scss configuration, user can use this projects increse the performance of application and SEO perpose

## Getting Started
A react front setup devloped in below  environment

| Name | Description | virsion | Required/Optional |
| :---: | :---: | :---: | :---: |
| `Node` | The node.js is used to run our React.js application on the server environment. | `v14.15.4` | Required |
| `Npm ` | npm is the package manager for the Node JavaScript platform. | `6.14.10` | Required |
| `Next` | This package  used for server side randering in react.js  | `10.0.7` | Required |
| `React` | React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.  | `17.0.2` | Required |
| `Redux` | Redux is a state management tool for javascript library. | `3.6.0` | Required |

### Installing

Please before start the project on follow the below command  to install all node.js dependencies
Using NPM - Node Package Manager

```
npm install 
```
Using Yarn - Yarn Package Manager

```
yarn install
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

Please follow the below command to run the project in different environments

### Development environment

Below command use for run the project in local development environments.
```
npm run dev || yarn dev
```
and for the server in development environments use below

```
npm run build || yarn build
```

```
npm run start || yarn start
```

### Staging environment

Below command use for run the project in staging environments.
```
npm run build:stag || yarn build:stag
```
```
npm run start:stag || yarn start:stag
```
### Production environment

Below command use for run the project in production environments.
```
npm run build:prod || yarn build:prod
```
```
npm run start:prod || yarn start:prod
```

## Folder structure
 We used below directory structure in our react front project.
```
reactjs_front
    ├── api-manager
    │       └──  index.js
    ├── components
    │       ├── Layout.js
    ├── hooks
    │       └──  useBlogList.js
    |       └──  useLogin.js
    |       └──  useSignup.js
    ├── pages
    │       ├── auth
    │       │       └──  signup.js
    │       ├── homepage
    │       │       └──  blog
    │       │           └──  bloglist.js
    │       ├── _app.js
    │       ├── _document.js
    │       └──  index.js
    |       └──  login.js
    ├── public
    │       ├── assets
    │       │       ├── fonts
    │       │       ├── images
    │       │       └── scss
                            └──  component/
                            └──  helpers/
    │       │               └──  style.scss (Included bootstrap SCSS here for override variables)
    ├── routes
    │       └── index.js
    ├── store
    │       ├── actions
    │       │       ├── auth.js    
    │       │       ├── types.js    
    │       │       ├── ui.js    
    │       │       ├── user.js    
    │       │       └── index.js
    │       ├── reducers
    │       │       ├── ui.js    
    │       │       ├── user.js    
    │       │       └── index.js
    │       ├── with-redux-store.js
    │       └── index.js
    ├── .env.dev
    ├── .env.prod
    ├── .env.stag
    ├── .gitignore
    ├── next.config.js
    ├── package.json
    ├── README.md
 
```
#### Here's a quick overview for folder.
`/api-manager :- `  Api call related functions.

`/components :- ` Independent and reusable bits of code.

`/public :-`  It's the root folder that gets dealt by the web server in the end.

`/pages :- ` Its contains all next.js routes pages files.

`/pages/index.js :- `index.js is the traditional and actual entry point for all react apps.

`/pages/App.js :- ` It's used for default intial server side rander our projects code.

`/public :- ` Its contains all static files like images, fonts, css, scss, robot.txt, sitemap.xml and etc.

`/store :- ` Its contains redux methods like action, reducer and store.

`.env.dev :-`  Its devlopment environment configuration files for our project.

`.env.stag :-` Its staging environment configuration files for our project.

`.env.prod :-` Its  production environment configuration files for our project.

`.gitignore :-` Git file ignore config files.

`package.json :-` this file holds various metadata relevant to the project.

`next.config.js :-` this file holds next.js configuration relted files.

`README.md :-` It's a set of useful information about a project and a kind of manual.

## Project configuration
We used below directory structure in our react front projects.
### Scripts
 we need to follow below scripts to ganarate build and run project in different envirements, some script are also used for test our projects. 
```json
{
    "dev": "env-cmd -f .env.dev node server.js",
    "build": "env-cmd -f .env.dev next build",
    "build:stag": "env-cmd -f .env.stag next build",
    "build:prod": "env-cmd -f .env.prod next build",
    "start": "env-cmd -f .env.dev node server.js",
    "start:stag": "env-cmd -f .env.stag node server.js",
    "start:prod": "env-cmd -f .env.prod node server.js",
    "sonar": "sonar-scanner"
 }
```
### Dependencies
  We used varios node.js dependencies library in our projects, all library are also listed in below view wiht its virsion.
```json
{
    "axios": "^0.24.0",
    "bootstrap": "^5.1.3",
    "formik": "^2.2.9",
    "next": "latest",
    "next-redux-saga": "^4.1.2",
    "next-redux-wrapper": "^7.0.5",
    "qs": "^6.10.3",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-intl-tel-input": "^8.2.0",
    "react-redux": "^7.2.6",
    "redux": "^4.1.2",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-saga": "^1.1.3",
    "reduxsauce": "^1.2.1",
    "yup": "^0.32.11"
  }
```
## Authors

* **INIC** - *Initial work* - [IndiaNIC Infotech Limited](https://www.indianic.com/)

See also the list of [contributors](http://git.indianic.com/IIL0/I2020-5861/reactjs-front/project_members) who participated in this project.


### Vendor Dependencies
[React Selectize] : http://furqanzafar.github.io/react-selectize (This can be useful when you are using the select control inside a parent element with its overflow auto or scroll. Required react-dom-factories and react-transition-group)

[React Slick Slider] : https://www.npmjs.com/package/react-slick (Also install slick-carousel for css and font)

[React OTP Input] : https://www.npmjs.com/package/react-otp-input

[React Multiline Clamp]: https://www.npmjs.com/package/react-multiline-clamp

[React Animated CSS] : https://www.npmjs.com/package/react-animated-css (Required animate.min.css)

[React Star Ratings] : https://www.npmjs.com/package/react-rating-stars-component

[React Rangeslider] : https://www.npmjs.com/package/react-rangeslider

[React DatePicker] : https://www.npmjs.com/package/react-datepicker

[React Number Format] : https://www.npmjs.com/package/react-number-format