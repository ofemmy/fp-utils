import {cond} from "../cond"
describe('cond()', () => {
    let fn = cond(
    [
    [(x:number)=>x%2===0,x=>x*2]
    ]
    )
    test('should ', () => {
       expect(fn(4)).toBe(8) 
    })
    
})
