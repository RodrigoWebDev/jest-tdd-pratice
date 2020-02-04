import { expect } from 'chai'
import map from "./map"

it("Should be a function", () => {
    expect(map).to.be.a('function');
})

it("map([1,2], (item) => item) shoud return the same array [1,2]", () => {
    expect(map([1,2], (item) => item)).to.be.deep.equal([1,2])
})

it("map([3,4], (item) => item) shoud return [4,5]", () => {
    expect(map([3,4], (item) => item + 1)).to.be.deep.equal([4,5])
})

it("map([4,8], (item) => item) shoud return [5,9]", () => {
    expect(map([4,8], (item) => item + 1)).to.be.deep.equal([5,9])
})

it("map([1,2], (item, index) => index) shoud return [0,1]", () => {
    expect(map([1,2], (item, index) => index)).to.be.deep.equal([0,1])
})

it("map([1,2], (item, index, array) => array) shoud return [ [1,2], [1,2] ]", () => {
    expect(map([1,2], (item, index, array) => array)).to.be.deep.equal([ [1,2], [1,2] ])
})

it("map() without parameters should return null", () => {
    expect(map()).to.be.deep.equal(null)
})