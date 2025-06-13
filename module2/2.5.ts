// function with generics
const createArray=(param:string):string[]=>{
    return [param]
}
const res1=createArray("shaon")

const genericCreateArray=<T>(param:T):T[]=>{
    return [param]
}
type User={id:number,name:string}
const GenericObj=genericCreateArray<User>({id:611,name:'shaon'})
const GenericString=genericCreateArray<string>('polock')
 

//generic tuple with function

//exp 1

const genericCreateArrayTuple=<T,Q>(param1:T,param2:Q):[T,Q]=>{
    return [param1,param2]
}
const tupleRes1=genericCreateArrayTuple<number,string>(611,'shaon')

//exp 2

type Identity={
    name:string,
    sec:string
}
const tupleRes2=genericCreateArrayTuple<number,Identity>(611,{name:'shaon',sec:'8E'})
