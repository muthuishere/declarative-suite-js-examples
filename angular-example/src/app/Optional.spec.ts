import {Optional} from "declarative-optional";


describe('Optional', () => {


it("Creating Optional and applying map should return optional",()=>{


    const res  = Optional.of(25)
        .map((i)=>i+1);
    console.log(res);
    console.log(typeof res);
    expect(res.isPresent()).toEqual(true)
    expect(res.get()).toEqual(26);
})

it("applying peek function should be called , but response should not be considered",()=>{

    let optional = new Optional(45);
    let peekedres = 0
    const res  = optional
        .map((i)=>i+1)
        .peek((i)=>{
            peekedres =i+1
            return peekedres
        })
        .get()

    expect(res).toEqual(46)
    expect(peekedres).toBe(47)
})


it("optional with Undefined should return null",()=>{

    let optional = new Optional(undefined);
    const res  = optional
        .map(i=>i+1)

    expect(res.isPresent()).toEqual(false)
    expect(res.get()).toBe(null)

})


it("optional with filter and map should apply both",()=>{


    const res  = Optional.of(45)
        .filter(i=>i %5 ==0)
        .map(i=>i+1)
        .get()

    expect(res).toEqual(46)
})


it("optional with appropriate filter and map should work fine for failure",()=>{


    const res  = Optional.of(46)
        .filter(i=>i %5 ==0)
        .map(i=>i+1)
        .get()

    expect(res).toBe(null)
})


it("when using orElse optional should return default value, if evaluation is null",()=>{


    const res  = Optional.of(46)
        .filter(i=>i %5 ==0)
        .map(i=>i+1)
        .orElse(9898)

    expect(res).toEqual(9898)
})



it("when using orElse optional should return evaluated value, if evaluation is not null",()=>{


    const res  = Optional.of(45)
        .filter(i=>i %5 ==0)
        .map(i=>i+1)
        .orElse(9898)

    expect(res).toEqual(46)
})

it("when using ifPresent the function arguement should not be invoked, if evaluation is null",()=>{

    let res  = null
    Optional.of(46)
        .filter(i=>i %5 ==0)
        .map(i=>i+1)
        .ifPresent((data)=>{
            res =data
        })

    expect(res).toEqual(null)
})
it("when using ifPresent the function arguement should be invoked, if evaluation is not null",()=>{

    let res  = 0
    Optional.of(45)
        .filter(i=>i %5 ==0)
        .map(i=>i+1)
        .ifPresent((data)=>{
            res =data
        })

  expect(res).toEqual(46)
})



it("when using orElse optional should return evaluated value, if evaluation is not null",()=>{


    const res  = Optional.of(45)
        .filter(i=>i %5 ==0)
        .map(i=>i+1)
        .orElse(9898)

    expect(res).toEqual(46)
})
});
