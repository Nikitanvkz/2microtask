import React from "react";


type NewComponentType ={
    topCars: Array<topCarsType>
}

type topCarsType = {
    manufacturer:string,
    model:string
}

export const NewComponent = (props:NewComponentType) => {
    return (
        <table>
            {props.topCars.map((objectFromtopCarstArray:topCarsType,index)=> {
                return (
                    <tr>
                        <th>{index+1}</th>
                        <th>{objectFromtopCarstArray.manufacturer}</th>
                        <th>{objectFromtopCarstArray.model}</th>
                    </tr>
                )
            })}
        </table>
    );
};


// type NewComponentType = {
//     students: Array<StudentType>
// }
//
// type StudentType = {
//     id: number,
//     name: string,
//     age: number
// }

// export const NewComponent = (props: NewComponentType) => {
//     return (
//         <ul>
//             {props.students.map((objectFromStudentArray:StudentType,index)=>{
//                 return (
//                     <li key={objectFromStudentArray.id}>
//                         <span>{objectFromStudentArray.name}</span>
//                         <span>age: {objectFromStudentArray.age}</span>
//                     </li>
//                     )
//             })}
//         </ul>
//     );
// };