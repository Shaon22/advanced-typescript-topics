//generic type
{

    type GenericArray<T>=Array<T>
// const IDs: number[]=[611,585,502]
const IDs: GenericArray<number>=[611,585,502]

// const name: string[]=['shaon','saif','mamun']
const name: GenericArray<string>=['shaon','saif','mamun']

// const boolArray: boolean[]=[true,false,true]
const boolArray: GenericArray<boolean>=[true,false,true]

// generic object

const company:GenericArray<{name:string,age:number}>=[
    {
        name:'shaon',
        age:25
    },
    {
        name:'saif',
        age:24
    }
]

//generic tuple







}