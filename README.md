## install dependencies

```
npm install
```

## run

```
npx nodemon app/index.ts 
```

This will create a server at the localhost:4000/graphql URL.

### getPerson

```bash
query ($getPersonId: Int) { #the argument will be of type Integer
  getPerson(id: 1) {
    #get the person with the ID of 1
    name
    id
  }
}
```

### getAll

```bash
query {
  #get all of the people available in the server
  getAllPeople {
    #procure their IDs and names.
    id
    name
  }
}
```

### addPerson

```bash
#perform a mutation on the server
mutation($name: String) {
  addPerson(name:"Hussain") { #add a new person with the name "Hussain"
    #if the execution succeeds, return its 'id' and 'name` to the user.
    id
    name
  }
}
```