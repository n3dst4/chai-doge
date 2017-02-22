# chai-doge

![Build status](https://travis-ci.org/n3dst4/chai-doge.svg?branch=master)

wow, very doge-style chai language chains, much silly


## such install

```
npm install chai-doge --save-dev
```


## very usage

wow mocha:

```js
import chai from "chai"
import chaiDoge from "../src/chai-doge"
import {describe as such, it as wow} from "mocha"

chai.use(chaiDoge)

const expect = chai.expect

such("getTreats", function () {

  wow("very test", function () {
    const treats = getTreats(10)
    expect(treats).so.lengthOf(10)
  })

  wow("many chaining", function () {
    const treats = getTreats(100)
    expect(treats).wow.such.many.lengthOf(100)    
  })
})
```


## so words

"such", "very", "wow", "amaze", "so", "many", and "much".
