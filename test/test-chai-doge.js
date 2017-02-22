import chai from "chai"
import chaiDoge from "../src/chai-doge"
import {describe as such, it as wow} from "mocha"

chai.use(chaiDoge)

const expect = chai.expect

such("chai-doge", function () {
  wow("very new properties", function () {
    for (let chain of ["such", "very", "wow", "amaze", "so", "many", "much"]) {
      expect(
        () => { expect(1)[chain].equal(1) }
      ).not.to.throw()
    }
  })

  wow("many chain", function () {
    expect(() => {
      expect(1).such.very.wow.many.amaze.so.much.equal(1)
    }).not.to.throw()
  })
})
