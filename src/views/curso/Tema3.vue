<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Fundamentos del Pensamiento Algorítmico'" :subTitulo="'3. Representación de algoritmos: pseudocódigo y diagramas de flujo.'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    
    p.mb-5(data-aos="fade-up") Como se mencionó anteriormente, un algoritmo es un conjunto de instrucciones lógicas ordenadas que cuentan con un inicio, un fin y que resuelven un problema. Encontrar estos pasos requiere de estructurarlos de manera tal que permitan ser eficientes y eficaces, resolviendo el problema de la manera más práctica posible. Una manera práctica de comprender la estructura funcional de un algoritmo, es la siguiente: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-figura.mb-2(data-aos="fade-up")
          h5 Tabla 4.
          span  Estructura de un algoritmo

        .tabla-a.mb-4(data-aos="zoom-in")
          table
            thead
              tr
                th Estructura
                th Descripción
                th Ejemplo

            tbody
              tr(style="background-color: #FFF;")
                th.text-center Solicitar datos
                td 
                  p.mb-0 Un algoritmo debe estar en la capacidad de solicitar "datos" que pueden ser valores o cadenas de caracteres.
                td 
                  p.mb-3 Solicitar edad;
                  
                  p.mb-3 Solicitar año;
                  
                  p.mb-0 Solicitar dirección;

              tr(style="background-color: #F6F6F6;")
                th.text-center Imprimir datos
                td 
                  p.mb-3 Un algoritmo debe estar en la capacidad de "presentar" los datos a través de impresión por pantalla. 
                  p.mb-3Es importante recordar que una variable contiene un valor y una cadena de texto contiene un conjunto de valores o caracteres. Por ejemplo, Valor 10, cadena "Henry".
                td
                  p.mb-3 Imprimir mensaje
                  p.mb-3.ps-4 Imprimir "Error en el valor ingresado"
                  p.mb-3 Imprimir variable
                  p.mb-0.ps-4 Imprimir "Su edad es: " +edad
              tr(style="background-color: #FFF;")
                th.text-center Evaluar condiciones
                td 
                  p.mb-0 Proceso que le permite al algoritmo obtener una respuesta (F o V) y de acuerdo con ella realizar un procedimiento. La evaluación de condiciones se lleva a cabo a través de la verificación del orden, longitud, tamaño, etc.
                td
                  p.mb-3 #[code If (edad>18)]   
                  p.mb-3.ps-4 Desplegar "Usted es mayor de edad"
                  p.mb-3 #[code else]
                  p.mb-0.ps-4 Desplegar "Usted es menor de edad"
              tr(style="background-color: #F6F6F6;")
                th.text-center Ejecutar operaciones
                td El algoritmo debe estar en la capacidad de realizar operaciones aritméticas y guardar el resultado en una variable.
                td
                  p.mb-0 edad_actual


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-2.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/1.svg', alt='')
            .col-lg
              p.mb-0 Una vez se ha logrado consolidar la estructura del algoritmo, en donde se tienen presente las variables de entrada, el procedimiento que se debe realizar y el resultado esperado, se puede plasmar a través del pseudocódigo y un diagrama de flujo el proceso que debe ejecutar el algoritmo para su solución; verificar a través de la comprobación y ajustar si es necesario. 

    #t_3_1.titulo-segundo(data-aos="flip-up").mb-5
      h2 #[span 3.1] Representación de algoritmos: pseudocódigo y diagramas de flujo  

    h2.mb-4(data-aos="fade-up") Pseudocódigo

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-up") El pseudocódigo permite escribir de manera ordenada, la secuencia de pasos lógicos que el algoritmo debe ejecutar; es universal, lo que implica su comprensión y lectura sin requerir un lenguaje de programación formal para su escritura. Se considera natural o semiformal, se utiliza para dar lógica al algoritmo, antes de su construcción. 

        .bg-color-6.p-4.px-md-5.mb-4(data-aos="fade-up")
          p.mb-0 El pseudocódigo debe ser comprensible para personas sin conocimientos técnicos en programación, dado que debe priorizar la claridad sobre la sintaxis.
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/2.png', alt='')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p.mb-4(data-aos="fade-up") Las características del pseudocódigo son: 

        AcordionA(tipo="b")(data-aos="zoom-in")
          .div(titulo="Libre de rigidez sintáctica")
            p Libre de rigidez sintáctica propia de los lenguajes de programación, es decir, no sigue las reglas propias de un lenguaje.

          .div(titulo="Estructura lógica")
            p Utiliza secuencias, condiciones y ciclos dentro de su estructura.

          .div(titulo="Facilidad de traducción")
            p Una vez se ha terminado de redactar el algoritmo, se podría traducir fácilmente a cualquier lenguaje de programación, gracias a su fácil lectura y comprensión.

          .div(titulo="Universal")
            p Se debe comprender fácilmente debido a su simplicidad y claridad.

      .col-lg-5.order-1
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/3.png", alt="")


    p.mb-5(data-aos="fade-up") La estructura del pseudocódigo está conformada por:


    .titulo-figura.mb-4(data-aos="flip-up")
      h5 Figura 2. 
      span Estructura del pseudocódigo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/figuras/figura2.png', alt='', style="max-width: 610px;").mx-auto
      .col-lg-6
        p.mb-4(data-aos="fade-up") Para comprender mejor la estructura del pseudocódigo, es necesario definir cada paso:

        ol.lista-ol--cuadro(data-aos="fade-up").mb-3
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Todo algoritmo debe tener un #[strong inicio] y un #[strong fin].
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Las variables deben ser #[strong declaradas] (se deben asignar los espacios en memoria, para cada variable, porque serán utilizadas por el código a la hora de realizar los procedimientos propios del algoritmo). Este paso es importante pues requiere de atención para evitar errores en la ejecución o validación del algoritmo.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | La #[strong secuencia] determina el orden lógico que debe seguir el algoritmo.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Las #[strong condiciones] permiten la toma de decisiones dentro del ciclo normal del algoritmo; así, a través de la evaluación de expresiones lógicas, se determina el paso a seguir dentro del código.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Los #[strong ciclos] permiten crear estructuras repetitivas que ahorran líneas de código y agilizan el procesamiento de las operaciones dentro del código.


    .bg-color-6.mb-5
      .row.justify-content-center.align-items-center
        .col-lg
          .px-5
            p.mb-4(data-aos="fade-up") Para ampliar los conceptos sobre pseudocódigo y conocer algunos ejemplos, lo invitamos a ver los siguientes videos:

            a.anexo.mb-4.bg-white.w-fit(href="https://youtu.be/Q1z34G3fTUM" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-video.svg")
              .anexo__texto
                p <strong>Video. </strong> ¿Qué es un pseudocódigo? | Explicación rápida y sencilla

            a.anexo.mb-4.bg-white.w-fit(href="https://youtu.be/lByEQkmKRis" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-video.svg")
              .anexo__texto
                p <strong>Video. </strong> Ejemplo de un pseudocódigo y diagrama de flujo 

        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/2.png', alt='')

    h2.mb-4(data-aos="fade-up") Ejemplo 1 - Operador matemático. Suma de dos números

    p.mb-4(data-aos="fade-up") Para realizar la suma de dos números, se requiere el número 1, número 2, un operador matemático (+) y el proceso resultante deberá ser almacenado dentro de una variable suma. 

    p.mb-4(data-aos="fade-up") Siempre se debe dar inicio y fin al algoritmo, además de declarar las variables; continuando con el ejemplo, el pseudocódigo resultante sería:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-figura.mb-2(data-aos="fade-up")
          h5 Tabla 5.
          span Pseudocódigo operador matemático

        .tabla-a.mb-4(data-aos="zoom-in")
          table
              thead
                tr
                  th Pseudocódigo
                  th Descripción

              tbody
                tr(style="background-color: #F6F6F6;")
                  td
                    p Inicio
                    p.ps-4 Leer número 1
                    p.ps-4 Leer número 2
                    p.ps-4 Suma = número 1 + número 2
                    p.ps-4 Imprimir "El resultado de la suma es: ", suma
                    p Fin
                  td 
                    p Inicio
                    p.ps-4 Se lee el valor del número 1
                    p.ps-4 Se lee el valor del número 2
                    p.ps-4 Se realiza la suma de los dos números
                    p.ps-4 Se muestra en pantalla el resultado de la suma
                    p Fin 

        p.mb-4(data-aos="fade-up") El ejemplo anterior cumple con las características del pseudocódigo; es simple, claro, lógico, cuenta con una sintaxis libre de lenguajes de programación y es universal; fácilmente se comprende el objetivo del código escrito, sin ser programador. 


        .bg-color-2.p-4.px-md-5.mb-4(data-aos="fade-up")
          p.mb-0 Si se desea aumentar el nivel de complejidad del ejemplo 1, se puede incluir una validación que indique cuál de los dos números es mayor. 

    h2.mb-4(data-aos="fade-up") Ejemplo 2 - Operador relacional. Verificación del mayor de dos números

    p.mb-4(data-aos="fade-up") Para realizar la verificación del mayor de dos números, se requiere el número 1, número 2, un operador relacional (>) y el proceso resultante deberá ser presentado en pantalla. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-figura.mb-2(data-aos="fade-up")
          h5 Tabla 6.
          span Pseudocódigo operador relacional

        .tabla-a.mb-4(data-aos="zoom-in")
          table
              thead
                tr
                  th Pseudocódigo
                  th Descripción

              tbody
                tr(style="background-color: #F6F6F6;")
                  td
                    p Inicio
                    p.ps-3 Leer número 1
                    p.ps-3 Leer número 2
                    p.ps-3 Si (número 1 &gt; número 2) entonces
                    p.ps-5 Imprimir "El número 1 es mayor"
                    p.ps-3 Sino
                    p.ps-5 Imprimir "El número 2 es mayor"
                    p Fin
                  td 
                    p Inicio
                    p.ps-3 Se lee el valor del número 1
                    p.ps-3 Se lee el valor del número 2
                    p.ps-3 Se realiza la comparación entre los dos números
                    p.ps-3 Si el número 1 es mayor que el número 2, 
                    p.ps-5 se muestra en pantalla el mensaje "El número 1 es mayor"
                    p.ps-3 Sino 
                    p.ps-5 se muestra en pantalla el mensaje "El número 2 es mayor"
                    p Fin 

        p.mb-4(data-aos="fade-up") En el ejemplo anterior, queda clara la forma como funciona, el operador relacional.

        p.mb-4(data-aos="fade-up") Al verificar si se cumple que el número 1 es mayor al número 2, se presenta en pantalla el mensaje “el número 1 es mayor”; de lo contrario, el número 2 sería mayor al número 1 y el mensaje sería “el número 2 es mayor”. 

        .bg-color-3.p-4.px-md-5.mb-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema3/3.svg', alt='')
            .col-lg
              p.mb-0 Como ejercicio práctico, puede asignar valores a cada número, seguir la secuencia de pasos y utilizar el operador relacional. La impresión en pantalla dependerá de los números que utilice.

    h2.mb-4(data-aos="fade-up") Ejemplo 3 - Utilización de ciclo

    p.mb-4(data-aos="fade-up") Obtener el resultado de la multiplicación de un número x hasta el 10. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-figura.mb-2(data-aos="fade-up")
          h5 Tabla 7.
          span Pseudocódigo operador relacional

        .tabla-a.mb-4(data-aos="zoom-in")
          table
              thead
                tr
                  th Pseudocódigo
                  th Descripción

              tbody
                tr(style="background-color: #F6F6F6;")
                  td
                    p Inicio
                    p.ps-3 contador = 1;
                    p.ps-3 Leer número x;
                    p.ps-3 Mientras (contador &lt;= 10) hacer
                    p.ps-5 Imprimir "El resultado de la multiplicación es: ", x * contador
                    p.ps-3 contador = contador + 1;
                    p Fin
                  td 
                    p Inicio
                    p.ps-3 Se inicializa el contador en 1
                    p.ps-3 Se lee el valor del número x
                    p.ps-3 Mientras el contador sea menor o igual a 10, se realiza la multiplicación
                    p.ps-5 Se muestra en pantalla el resultado de la multiplicación
                    p.ps-3 Se incrementa el contador en 1
                    p Fin 

        .bg-color-6.mb-5
          .row.justify-content-center.align-items-center
            .col-lg.order-2
              .px-4
                p.mb-4(data-aos="fade-up") #[strong Del ejemplo anterior, pueden surgir algunos interrogantes:]

                .row.justify-content-center.align-items-center.mb-3
                  .col-auto
                    figure
                      img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
                  .col
                    p.mb-0 ¿Qué puede pasar si el contador no se inicializa?
                
                .row.justify-content-center.align-items-center.mb-3
                  .col-auto
                    figure
                      img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
                  .col
                    p.mb-0 ¿Qué pasaría si no se incrementa el contador?

                .row.justify-content-center.align-items-center.mb-3
                  .col-auto
                    figure
                      img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
                  .col
                    p.mb-0 ¿Qué pasa en el momento que el contador sea igual a 10?
            .col-lg-auto.order-1
              figure
                img(src='@/assets/curso/tema3/4.png', alt='')

    p.mb-5(data-aos="fade-up") Las ventajas del pseudocódigo son:


    .row.justify-content-center.align-items-start.mb-5
      .col-lg-7

        AcordionA(tipo="b")(data-aos="zoom-in").mb-4
          .div(titulo="Claridad")
            p Al momento de desarrollar el pseudocódigo, se concentra en expresar la lógica del programa sin especificaciones propias de lenguajes técnicos.

          .div(titulo="Versatilidad")
            p Se puede adaptar a cualquier lenguaje de programación.

          .div(titulo="Facilita la comunicación")
            p Cualquier persona puede entender la finalidad del programa.

          .div(titulo="Ahorra tiempo")
            p Permite encontrar errores antes de pasar a escribir el código.

        div(style="background-color: #E4FEFE;").p-4.px-md-5(data-aos="fade-up")
          p.mb-0 En conclusión, el pseudocódigo, permite escribir un programa de manera semiformal, enfocándose en la lógica del algoritmo y cuyo propósito es facilitar la implementación de un lenguaje de programación. 
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema3/5.png", alt="")

    .row.justify-content-center.mb-5
      .col-lg-9
        .bg-color-white.shadow-soft.py-4.px-lg-5(data-aos="fade-up")
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Concepto del Pseudocódigo
                    p.mb-0 Se puede ampliar el concepto sobre pseudocódigo en el libro: Gaxiola Pacheco, C. G. & Flores Gutiérrez, D. L. (2008). Metodología de la programación con pseudocódigo enfocado al lenguaje C: (ed.). Plaza y Valdés (México).
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/ereader/tecnologicadeloriente/75935?page=90" target="_blank")
                      span Ir al sitio web
                      i.fas.fa-arrow-right

    h2.mb-4(data-aos="fade-up") Diagramas de flujo

    p.mb-4(data-aos="fade-up") Un diagrama de flujo corresponde a la representación gráfica de un proceso y se utiliza en programación, para crear algoritmos en los cuales se emplean representaciones gráficas o símbolos estandarizados del proceso; ilustran paso a paso y de manera sencilla la lógica que debe seguir el programa; su uso es amplio como por ejemplo, la toma de decisiones, gestión de procesos, entre otros. 

    p.mb-4(data-aos="fade-up") Las características de un diagrama de flujo son:

    .bg-full-width.bg-fondo-1.p-4
      .px-4.p-md-5
        .row.justify-content-center
          .col-lg-8
            ImagenInfografica.color-acento-contenido
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/infografia/info1.png', alt='', style="max-width: 858px;").mx-auto

              .bg-color-6.p-3(x="35%" y="7.2%" numero="+")
                p #[strong Estandarización]
                p Se utilizan figuras, cada una de ellas con un significado particular.

              .bg-color-6.p-3(x="61%" y="28.3%" numero="+")
                p #[strong Secuencia]
                p El flujo debe estar determinado por un orden lógico que se conecta a través de flechas que enlazan una figura con la otra y marcan el paso a paso.

              .bg-color-6.p-3(x="34.8%" y="50.1%" numero="+")
                p #[strong Fácil comprensión]
                p Al ser una herramienta gráfica, permite que el proceso se pueda comprender más fácilmente.

              .bg-color-6.p-3(x="61%" y="71.3%" numero="+")
                p #[strong Versatilidad]
                p No solo se usa en el campo informático, áreas como la administración, educación, etc., también se usan los diagramas de flujo, para la representación de sus procesos.

              .bg-color-6.p-3(x="35%" y="93.2%" numero="+")
                p #[strong Facilidad en la identificación de errores]
                p Al comenzar a ejecutar el diagrama de flujo, se encuentran “cuellos de botella” o errores que pueden ser ajustados en el proceso, para garantizar que se resuelva el problema planteado, eficiente y eficazmente.

    .bg-full-width.border-top.color-primario
      .px-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/56561?page=50" target="_blank" rel="noopener noreferrer") Bisbal Riera, J. (2013). Manual de algorítmica: recursividad, complejidad y diseño de algoritmos. Editorial UOC.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/75935?page=15" target="_blank" rel="noopener noreferrer") Gaxiola Pacheco, C. G. & Flores Gutiérrez, D. L. (2008). Metodología de la programación con pseudocódigo enfocado al lenguaje C. Plaza y Valdés.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/50327?page=37" target="_blank" rel="noopener noreferrer") Joyanes Aguilar, L. (2005). Programación en C: metodología, algoritmos y estructura de datos. McGraw-Hill España.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/69931?page=35" target="_blank" rel="noopener noreferrer") Mancilla Herrera, A. (2015). Diseño y construcción de algoritmos. Universidad del Norte.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
