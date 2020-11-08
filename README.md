# Running an application

This application uses [json-server](https://github.com/typicode/json-server) as source of data.
Json-server operates as real rest server, but instead of saving data in database, save it in json file.
To prevent trashing git with changes in db.json file, that is our mock database storage, it is not saved in git.
First time, you run this you need to create this file, as example run from root:

```
cp src/mock-db/example-db.json src/mock-db/db.json
```

To run json-server just use next command:

```
npm run start:server
```

Running frontend and other is described in details in `REACT-README.md`
