# Fetching Data and useEffect

### json-server
We were introduced to a fake Rest API called [json-server](https://www.npmjs.com/package/json-server). I would recommend installing [concurrently](https://www.npmjs.com/package/concurrently) as well. This saves having to manually fire up two servers in two separate cmd terminals to get the project running.

After installing concurrently, I added the following code to scripts in my package.json.
```
"scripts": {
    "start": "react-scripts start",
    "json-server": "json-server --watch ./data/db.json --port 3001",
    "dev": "concurrently \"npm start\" \"npm run json-server\"",
    ...
}
```
In my case I am using yarn and the project could then be fired up with the following.
```
yarn dev
```
### useEffect
In the tutorial the [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) hook was used to fetch a list of trip locations and prices.

It takes a function that by default will be called on each render of the component.

**Dependencies**

The hook has an optional argument in the form of a dependency array. This array contains values that the effect's function depends on.

```javascript
useEffect(() => {
    fetch(url)
        .then(response => response.json())
        .then(setTrips)
}, [url]) // dependant on changes to the url property
```

The dependency array acts in a similar way to an onChange event. On the next render of the containing component useEffect will look out for changes to the values inside of the dependency array and [conditionally fire the event](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect).

So for instance if the url in the above example is changed through a user clicking a button, on a subsequent render this will trigger useEffect to invoke the function and fetch new data.
