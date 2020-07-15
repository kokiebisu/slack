#! /bin/bash
heroku login
heroku container:login
heroku container:push --app slack-server server
heroku container:release --app slack-server server
