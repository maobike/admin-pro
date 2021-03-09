import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promises',
    templateUrl: './promises.component.html',
    styles: [
    ]
})
export class PromisesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        //this.promiseBasic();
        this.getUsuarios()
            .then( usuarios => {
                console.log(usuarios);
            })
    }

    // Ejemplo de una promesa básica
    promiseBasic(){
        const promesa = new Promise( ( resolve, reject ) => {
            if ( false ) {
                resolve("Hola mundo");
            }else{
                reject('Algo salio mal')
            }
            
        });

        promesa.then( (mensaje) => {
            console.log("Hey termine");
            console.log(mensaje);
            
        })
        .catch( error => {
            console.log('Error en mi promesa', error);
            
        });

        console.log("Fin del init");
    }

    getUsuarios(){
        return new Promise( resolve => {
            fetch('https://reqres.in/api/users')
            .then( resp => resp.json() )
            .then( body => resolve(body.data));
        });
    }

}
