export default (chai, utils) => {
  for (let chain of ["such", "very", "wow", "amaze", "so", "many", "much"]) {
    utils.addChainableMethod(chai.Assertion.prototype, chain)
  }
}
