# HOW TO RUN
```console
$ pip install pipenv
$ docker run --name api-simplify-db -p 5432:5432 -e POSTGRES_DB=api-simplify -e POSTGRES_PASSWORD=password -d postgres
$ npm install -g @angular/cli
$ cd backend
$ pipenv --three
$ pipenv install sqlalchemy psycopg2-binary
$ chmod u+x bootstrap.sh
$ ./bootstrap.sh
$ cd ../frontend
$ ng serve
```

# Useful commands
- Creating a new page...
```console
$ ng generate component <name>
$ ng generate class <name>
```

- Working with the api
```console
$ curl http://0.0.0.0:5000/apicall
$ curl -X POST -H 'Content-Type: application/json' -d '{
  "name": "Sample Name",
  "headers": "{headers}",
  "endpoint": "endpoint1",
  "parameters": "parameters"
}' http://0.0.0.0:5000/apicall
```

# Plan
- MVP: Simple API Test + Response
- Use case: see if you have everything right for access + get a sample without writing code)
- Additional feature - continuous polling + send results to email, HTTP POST, and maybe syslog?
- Use case: Monitor API + get the results without writing any code
- Additional feature - allow for logic to be built against the API response + send you an alert when that logic is hit
- Use case: Monitor API + write logic + get alerted without writing any code

# TODO LIST
- ~Make it so the user can build the headers with simple inputs (done)~
- ~Allow for you to write boolean logic agains the fields (done)~
- Setup an email integration to shoot off an email when that logic hits (hold)
- ~Generic http post action would be nice when the logic hits (done for slack webhook)~
- ~Web app: https://auth0.com/blog/using-python-flask-and-angular-to-build-modern-apps-part-1/ (done)~
- ~Update everything from that session to adjust to what I need~
- ~Design front end for MVP (done)~
- ~Add twitter bootstrap to make it look nice: https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a (done)~
- ~Web app 2: https://auth0.com/blog/using-python-flask-and-angular-to-build-modern-web-apps-part-2/ (done)~
- ~Learn how to setup auth0 (done)~
- ~Learn how the different pages work: https://vegibit.com/angularjs-component-tutorial/ (done)~
- Learn how to use forms and the data
- API / Entity updates for API Tester
- Web app 3: https://auth0.com/blog/using-python-flask-and-angular-to-build-modern-web-apps-part-3/


# Useful sites
- Bootstrap padding classes: https://www.jquery-az.com/bootstrap-margin-padding-classes-spacing-explained-5-examples/
- All logic options here when needed: http://jsonlogic.com/operations.html
- Python self explained: https://medium.com/quick-code/understanding-self-in-python-a3704319e5f0
- AngularJS docs: https://docs.angularjs.org/api
- AngularJS bootstrapping: https://medium.com/learnwithrahul/ways-of-bootstrapping-angular-applications-d379f594f604
- Boostrap theme guide: https://bootswatch.com/slate/
- AngularJS tour: https://angular.io/tutorial/toh-pt0
- Basecamp for future scaling: https://basecamp.com
- Creating API calls: https://github.com/gabelwright/Java-Grader/blob/master/__init__.py
