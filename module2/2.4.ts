//generic tuple
type genericTuple<x,y>=[x,y]
const manush :genericTuple<string,string> =['shaon','saif']

// generic with interface

interface developer<T,X=null> {
    name: string,
    computer:{
        brand:string,
        model:string,
        releaseDate:string
    },
    smartWatch:T,
    bike?:X
}
type PoorTypes={
    brand:string,
        model:string,
        display:string
}
const poorDeveloper:developer<PoorTypes>={
    name:'shaon',
    computer:{
        brand:'asus',
        model:'thinkpad',
        releaseDate:'2025'
    },
    smartWatch:{
        brand:'fitbit',
        model:'ky125',
        display:'OLED'
    }
}
interface RichTypes{
brand:string,
model:string,
heartTrack:boolean,
sleepTrack:boolean
}
interface Suzuki{
    brand:string,
    model:string
}
const richDeveloper:developer<RichTypes,Suzuki>
={
    name:'shaon',
    computer:{
        brand:'asus',
        model:'thinkpad',
        releaseDate:'2025'
    },
    smartWatch:{
        brand:'fitbit',
        model:'ky125',
        heartTrack:true,
        sleepTrack:true
    },
    bike:{
        brand:'suzuki',
        model:'gixer'
    }
}