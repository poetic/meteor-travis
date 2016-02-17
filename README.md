[![Build Status](https://travis-ci.org/poetic/meteor-travis.png)](https://travis-ci.org/poetic/meteor-travis)

# Setup Travis with PR integration in Meteor

First go to https://travis-ci.org/ and sign in with your GitHub account.

In the upper right corner click on your name (or choose Accounts) to open your Travis-ci profile.
You'll be presented with the list of your GitHub projects (only the ones where you have administrative authority)

Choose organization and repo and toggle the integration on.

Then add a .travis.yml file to your repo.

Example yml with eslint
```
sudo: false
language: node_js
cache:
  directories:
    - node_modules
notifications:
  email: false
node_js:
  - '4.1.1'
before_install:
  - npm i -g npm@^2.0.0
  - npm install --save-dev eslint-config-airbnb eslint-plugin-react eslint@^1.0.0
before_script:
  - npm prune
script:
  - eslint . --ext .jsx
after_success:
  - npm run semantic-release
branches:
  except:
    - "/^v\\d+\\.\\d+\\.\\d+$/"
```

## To add the logo to the readme
```
  [![Build Status](your repo's travis link.png)](your repo's travis link)
```
