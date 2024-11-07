const add = require('../stringCalculator')
describe("Create String Calculator",()=>{
    it("should return 0 for a empty string",()=>{
        expect(add("")).toBe(0)
    })
    it("should return the number itself if  only one number passed",()=>{
        expect(add("2")).toBe(2)
    })
})