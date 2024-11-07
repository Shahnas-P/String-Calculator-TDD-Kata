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
    it("should handle multiple numbers separated by commas",()=>{
        expect(add("2,3,4,5")).toBe(14)
    })
    it("should handle newlines as delimiters",()=>{
        expect(add("1\n2,3")).toBe(6)
    })
    it("should support different delimiters",()=>{
        expect(add("//;\n1;2")).toBe(3)
    })
    it("should throw an exception for negative numbers",()=>{
        expect(()=>add('-1 ,3 ,4')).toThrow(`negative numbers not allowed: ${-1}`)
    })
    it("Should throw an exception for negative numbers, listing all of them in the message, separated by commas",()=>{
        expect(()=>add('-1,-4,3')).toThrow('negative numbers not allowed: -1, -4')
    })
})