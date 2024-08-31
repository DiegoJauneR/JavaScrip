const punto ={
    x:10,
    y:15,
    dbujar(){
        console.log('dibjando');
    }
};


//delete punto.dibujar;
if('dbujar' in punto){
    punto.dbujar();
}

console.log(Object.keys(punto));
for(let llave of Object.keys(punto)){
    console.log(llave,punto[llave]);
}


for(let entry of Object.entries(punto)){
    console.log(entry);
}

for(let llave in punto){
    console.log(llave,punto[llave]);
}

