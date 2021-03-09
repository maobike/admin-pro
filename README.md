# Notas:
AdminPro

```
*** Aplicación Angular
*** Plantilla AdminPro

*** Rutas padres e hijas, app-routing.ts y rutas hijas dentro de cada carpeta de componentes: 
    auth/auth.routing.ts  --  pages/pages.routing.ts

*** Módulos independientes dentro de cada carpeta, se crea su modulo para hacer las importaciones
    al app.module.ts de todos sus componentes dependientes o que están dentro de la carpeta.
    auth/auth.module.ts  --  components/components.module.ts  --  nopagefound/nopagefound.component.ts
    pages/pages.module.ts  --  shared/shared.module.ts

*** Comunicación entre componentes padres e hijos con @input y @output
    Está en pages/progress/progress.component y components/incrementador/incrementador.component

*** Librería de gráficas
    https://valor-software.com/ng2-charts/#/GeneralInfo
    En pages/grafica1 están los ejemplos de gráficas tipo dona

*** El index.html carga dinámicamente el tema, esto está en pages/account-settings

*** Promesas y Observables
    Promesas -> pages/promises
    Observables -> pages/rxjs
    Sitio web de los operadores -> http://reactivex.io/documentation/operators.html

    
```