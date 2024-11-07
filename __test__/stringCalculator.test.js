import add from '../stringCalculator'
describe("Create String Calculator",()=>{
    it("should return 0 for a empty string",()=>{
        expect(add("")).toBe(0)
    })
    it("should return the number itself if  only one number passed",()=>{
        expect(add("2")).toBe(2)
    })
    it("should return sum of two coma separated numbers",()=>{
        expect(add("1,3")).toBe(4)
    })
    it("should return sum of any amount of numbers",()=>{
        expect(add("2,3,4,5")).toBe(14)
    })
})