// let user ={
//     email:'diego@holamundo.io',
//     name : 'Diego',
//     direccion:{
//         calle : 'monseñor ramon',
//         numero : 1532,
//     },
//     active:true,
//     recuperarclave:function (){
//         console.log('Recuperando clave...');
//     },

// };


function crearUsuario(name,email){
    return{
        email,
        name,
        active:true,
        recuperarclave:function (){
            console.log('Recuperando clave...');
        }, 
    }
}

let user1 = crearUsuario('carlos','car@gmail.com')












// let user1 ={
//     id:2,
//     email:'dieg22o@holamundo.io',
//     name : 'Diego22',
//     direccion:{
//         calle : 'monseñor ramon',
//         numero : 1532,
//     },
//     active:false,
//     recuperarclave:function (){
//         console.log('Recuperando clave...');
//     },

// };
