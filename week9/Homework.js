const students = [
    {id: 1,name: 'nalinee'},
    {id: 2,name: 'adam Smith'}
]
//sorting by id (ascending,descending)
//ascending
console.log(students.sort((students1,students2)=>students1.id-students2.id));
//descending
console.log(students.sort((students1,students2)=>students2.id-students1.id));

//sorting by name (ascending,descending)
console.log(students.sort((students1,students2)=>{
    const name1 = student1.name.toLocaleLowerCase()
    const name1 = student1.name.toLocaleLowerCase()
    if (name1>name2) return 1
    else if (name1<name2)return -1
    // else if ((name1=name2)return -1)
}





const str1 = 'ann'
const str1 = 'Boy'
const str1 = 'ann'

console.log(str1 < str2) //false
console.log(str1 > str2) //true
console.log(str1 === str2) //false
console.log(str1 === str3) //false
console.log(str1.toLocaleLowerCase() ===str3.toLocaleLowerCase()) // true

//วิธีเขียนคำนิยามของsorting ให้นิยามเป็น3ค่า
//1.ค่าบวก 2. ค่าลบ 3.0
