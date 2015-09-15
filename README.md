# deep-camel

Recursively changes all key values in a JS object from camelCase (e.g. myName) to snake_case (non-capital words
seperated by underscores, e.g. my_name) or the other way around. Treats numbers as non-capital characters.

Wraps camelCase and decamelize modules.

# method

```
var deepCamel = require('deep-camel')
deepCamel.camelize(target)
deepCamel.decamelize(target)
```

# example

```
var baseObj = { firstLevel: { secondLevel: null, secondLevel2: { thirdLevel: 'python' } } }

baseObj = deepCamel.decamelize(baseObj)
// { first_level: { second_level: null, second_level2: { third_level: 'python' } } }

baseObj = deepCamel.camelize(baseObj)
// { firstLevel: { secondLevel: null, secondLevel2: { thirdLevel: 'python' } } }


```

# error handling
Throws an error of instance TypeError for invalid input

```
try {
 deepCamel.camelize(a)
} catch (e) {
  if (e instanceof TypeError) {
    console.log('Invalid objects')
  }
}
```

# install

With npm do:

```
npm install deep-camel
```

# test

With npm do:

```
npm test
```

# license

MIT.

# Maintained by veyo-care
