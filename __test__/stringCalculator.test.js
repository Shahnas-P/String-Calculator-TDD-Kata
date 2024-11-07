const add = require('../stringCalculator')
describe("Create String Calculator",()=>{
    it("should return 0 for a empty string",()=>{
        expect(add("")).toBe(0)
    })
})