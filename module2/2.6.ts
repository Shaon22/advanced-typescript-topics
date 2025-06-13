//constraints

const addCourseToStudent=<T extends {id:number,name:string,email:string}>(student:T)=>{
    const course="next level web dev"
    return{
        ...student,course
    }
}
const student1=addCourseToStudent(
    {
        id:611,
        name:'shaon',
        email:"shaon@email.com",
        devType:"NLWD"
    }
)

const student2=addCourseToStudent({
    id:432,
    name:'ashim',
    email:'ashim@gmail.com',
    watch:'apple'
})