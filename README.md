##Setup

```bundle install```

```rake db:create```

```rake db:migrate```

```npm install```


###To run a local rails server - it's just like normal:

```rails s```

###To start up the webpack watching for the 'app/assets/javascripts/fronted', start:

```npm run dev```

###To run the test, 2 options:

```npm test``` will run the suite as a one-off run.

```npm run test:ci``` will run the suite ala Guard, and continuously watch for changes to the spec file.
