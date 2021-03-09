import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styles: [
    ]
})
export class BreadcrumbsComponent implements OnDestroy {

    public titulo: string = '';
    tituloSubs$: Subscription;

    constructor(private router: Router) {
        this.tituloSubs$ = this.getArgumentosRuta()
                            .subscribe( ({ titulo }) => {
                                this.titulo = titulo;
                                document.title = `AdminPro - ${ titulo }`; //Para el title de html
                            });
    }

    ngOnDestroy(): void {
        this.tituloSubs$.unsubscribe();
    }

    getArgumentosRuta(){
        //events es un observable que emite eventos
        //Acá extraemos la data que viene del router pages/pages.routing.ts con la información del titulo
        return this.router.events
            .pipe(
                filter( (event: any) => event instanceof ActivationEnd ),
                filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
                map( (event: ActivationEnd) => event.snapshot.data ),
            )
            
    }

}
