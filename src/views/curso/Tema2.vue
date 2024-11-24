<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Fundamentos del Pensamiento Algorítmico'" :subTitulo="'2. Lógica algorítmica: secuencias, condiciones, ciclos.'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden

    p.mb-4(data-aos="fade-up") Al desarrollar un algoritmo, no se podrá simplemente escribir el mismo y esperar que el resultado sea el esperado; se debe realizar un análisis del problema, definir las variables, estructurar el procedimiento y tener claro cuál será el resultado a obtener, una vez que el algoritmo termine; para lograrlo, se requiere del uso de la lógica algorítmica. El análisis del problema es fundamental y se convierte en el insumo necesario a la hora de construir un algoritmo, no solo eficiente, sino también eficaz. 

    p.mb-4(data-aos="fade-up") Antes de comenzar con la estructuración de un algoritmo, se deben contemplar algunos aspectos claves como: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        AcordionA(tipo="b")(data-aos="zoom-in")
          .div(titulo="Tipos de datos numéricos")
            p Números enteros y reales, positivos o negativos y no llevan punto decimal.
            p Ejemplos: +200, -10, 125, 483, 119, -550
            
          .div(titulo="Tipos de datos alfanuméricos")
            p Datos de tipo carácter o cadena de caracteres, contienen letras, signos, símbolos especiales, etc. Se deben escribir dentro de comillas simples (') o dobles ("). Pueden contener números, pero no se pueden realizar operaciones matemáticas con ellos.

          .div(titulo="Tipo carácter")
            p Ejemplos: 'h', 'd', 'i'

          .div(titulo="Tipo cadena")
            p Ejemplos: "universidad", "Clave_24", "jose13"

          .div(titulo="Memoria")
            p Espacio reservado dentro del sistema, que contiene un nombre y una variable. Al declarar una variable como año = 2024, se puede inferir que la variable es año y su valor es 2024.

          .div(titulo="Programa")
            p Concepto elaborado por Von Neumann en 1946 y lo define como "conjunto de instrucciones que sigue la computadora, para alcanzar un resultado específico".

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/1.svg", alt="")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        AcordionA(tipo="b")(data-aos="zoom-in")
          .div(titulo="Constante")
            p Es una variable almacenada en memoria y cuyo contenido no cambiará durante todo el proceso de ejecución del algoritmo.
            
          .div(titulo="Variables")
            p Diferente a la constante, la variable sí cambia "varía" su valor, según los procedimientos que se lleven a cabo dentro del algoritmo.

          .div(titulo="Nombres de Variables")
            p Corresponde al nombre asignado a una variable en la memoria y deberá respetar las dos reglas siguientes:
            ol.lista-ol
              li 
                span.text-bold 1. 
                | Iniciar con una letra.
              li 
                span.text-bold 2. 
                | Seguido de caracteres, como letras o números, sin acentuación.
            p #[strong Ejemplo:] edad, num_cedula, direccion.
            p Se debe tener en cuenta que el nombre debe ser claro y que identifique, de manera que su nombre sea representativo dentro del algoritmo. Por ejemplo, si se habla de una operación matemática como la multiplicación, se podrá utilizar num1, num2, multiplicacion.

          .div(titulo="Expresiones")
            p Los operadores y operandos componen una expresión. El operador determina el tipo de operación a realizar y los operandos serán los valores a procesar.

      .col-lg-5.order-1
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/1.svg", alt="")


    p.mb-5(data-aos="fade-up") Los tipos de operadores que existen son: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-figura.mb-2(data-aos="fade-up")
          h5 Tabla 2.
          span  Tipos de operadores

        .tabla-a.mb-5(data-aos="zoom-in")
          table
            thead
              tr
                th Tipo de operador
                th Operador
                th Operación

            tbody
              tr(style="background-color: #FFF;")
                th.text-center #[strong Asociativos]
                th.text-center ()
                td Método secuencial estructurado que sigue unas reglas definidas y cuyo objetivo es encontrar una conclusión válida.
              tr(style="background-color: #F6F6F6;")
                th.text-center(rowspan="5") #[strong Aritméticos]
                th.text-center ^
                td Potencia
              tr(style="background-color: #F6F6F6;")
                th.text-center *
                td Multiplicación
              tr(style="background-color: #F6F6F6;")
                th.text-center /
                td División
              tr(style="background-color: #F6F6F6;")
                th.text-center +
                td Suma
              tr(style="background-color: #F6F6F6;")
                th.text-center -
                td Resta
              tr(style="background-color: #FFF;")
                th.text-center(rowspan="6") #[strong Aritméticos]
                th.text-center =
                td Igual
              tr(style="background-color: #FFF;")
                th.text-center &lt;&gt; o &gt;&lt;
                td Diferente
              tr(style="background-color: #FFF;")
                th.text-center &lt;
                td Menor que
              tr(style="background-color: #FFF;")
                th.text-center &gt;
                td Mayor que
              tr(style="background-color: #FFF;")
                th.text-center &lt;=
                td Menor o igual que
              tr(style="background-color: #FFF;")
                th.text-center &gt;=
                td Mayor o igual que
              tr(style="background-color: #F6F6F6;")
                th.text-center(rowspan="3") #[strong Lógicos]
                th.text-center NOT
                td Negación
              tr(style="background-color: #F6F6F6;")
                th.text-center AND
                td Conjunción
              tr(style="background-color: #F6F6F6;")
                th.text-center OR
                td Disyunción


        .bg-color-3.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/3.svg', alt='')
            .col-lg
              p.mb-0(data-aos="fade-up") #[strong Importante:] al #[strong negar un valor], este cambiará de verdadero a falso y viceversa; en la #[strong conjunción] si ambos valores son verdaderos, se obtendrá un valor verdadero; en cualquier otro caso, el resultado será falso y, en la #[strong disyunción], si ambos valores son falsos, el resultado será falso; en cualquier otro caso, será verdadero.

        .titulo-figura.mb-2(data-aos="fade-up")
          h5 Tabla 3
          span Tipos de operadores

        .tabla-a.mb-5(data-aos="zoom-in")
            table
              thead
                tr
                  th Tipo de operador
                  th Operador
                  th Operación

              tbody
                tr(style="background-color: #FFF;")
                  th.text-center #[strong Aritméticas]
                  th.text-center 2 * (4-3) + 4
                  td 6
                tr(style="background-color: #F6F6F6;")
                  th.text-center(rowspan="3") #[strong Relacionales]
                  th.text-center 7=5
                  td Falso
                tr(style="background-color: #F6F6F6;")
                  th.text-center 5&lt;3
                  td Falso
                tr(style="background-color: #F6F6F6;")
                  th.text-center 9&gt;8
                  td Verdadero
                tr(style="background-color: #FFF;")
                  th.text-center(rowspan="2") #[strong Lógicas]
                  th.text-center (4-1) &gt; (5-3)
                  td Verdadero
                tr(style="background-color: #FFF;")
                  th.text-center (3-2) = (5-4)
                  td Verdadero
                tr(style="background-color: #F6F6F6;")
                  th.text-center(rowspan="3") #[strong Lógicos]
                  th.text-center NOT
                  td Negación
                tr(style="background-color: #F6F6F6;")
                  th.text-center AND
                  td Conjunción
                tr(style="background-color: #F6F6F6;")
                  th.text-center OR
                  td Disyunción

        .row.justify-content-center.align-items-start.mb-5
          .col-lg-6
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/tema2/4.png", alt="")
          .col-lg-6
            p.mb-3(data-aos="fade-up") Las reglas a seguir a la hora de resolver expresiones relacionales, son: 
            
            ol.lista-ol--cuadro(data-aos="fade-up").mb-3
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Primero resolver los paréntesis.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Encontrar valores de verdad para cada expresión.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Aplicar jerarquía de operadores lógicos.
            
            p.mb-3(data-aos="fade-up") #[strong Ejemplo:]

            .bg-color-4.p-4.mb-3(data-aos="fade-up")
              p.mb-0.text-center.fw-bold (5*2)&gt;(2+3) AND (1+4)&lt;(2^2)

            ol.lista-ol--cuadro(data-aos="fade-up").mb-3
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | (10)&gt;(5) AND (5)&lt;(4)
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | V AND F
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | F


        .bg-color-white.shadow-soft.py-4.px-lg-5(data-aos="zoom-in").mb-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Aplicación de la jerarquía de operadores
                  p.mb-0 Se puede poner en práctica lo aprendido, desarrollando los ejercicios propuestos “Aplicación de la jerarquía de operadores” del libro: Gaxiola Pacheco, C. G. & Flores Gutiérrez, D. L. (2008). Metodología de la programación con pseudocódigo enfocado al lenguaje C. Plaza y Valdés.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/ereader/tecnologicadeloriente/75935?page=24" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-arrow-right

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Metodología para la solución de algoritmos      

    p.mb-5(data-aos="fade-up") Recordar que una computadora es un equipo y no va a funcionar correctamente si no se le dan las instrucciones precisas para ello, es importante a la hora de desarrollar un algoritmo; se debe tener presente el paso a paso secuencial, lógico y ordenado, que le asegurará el éxito en su solución.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-4(data-aos="fade-up") Existe una metodología sugerida para la solución de los algoritmos y se puede establecer de la siguiente manera:
        
        ol.lista-ol--cuadro(data-aos="fade-up").mb-3
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Comprender el problema. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Generar un algoritmo inicial.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Seleccionar una estrategia de solución para el algoritmo.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Implementar el algoritmo usando un lenguaje de programación.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Probar el algoritmo.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Documentar el algoritmo.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Optimizar el algoritmo.

      .col-lg-6
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/5.svg", alt="")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-white.shadow-soft.py-4.px-lg-5(data-aos="zoom-in").mb-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para ampliar el concepto de metodología para la solución de algoritmos, puede consultar el libro: Gaxiola Pacheco, C. G. & Flores Gutiérrez, D. L. (2008). Metodología de la programación con pseudocódigo enfocado al lenguaje C. Plaza y Valdés.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/ereader/tecnologicadeloriente/75935?page=27" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-arrow-right

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Secuencias, condiciones, ciclos 

    .bg-full-width.bg-color-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") ¿Cuáles son los componentes claves en la lógica algorítmica? 
            p.mb-4(data-aos="fade-right") Descubra los componentes clave de la lógica algorítmica que transformarán su comprensión de la programación. Lo invitamos a explorar nuestro PDF "Secuencias, Condiciones y Ciclos" y a profundizar en estos fundamentos esenciales para desarrollar algoritmos eficientes y bien estructurados. ¡No se lo pierda y dé el siguiente paso en su aprendizaje!

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_Secuencias_condiciones_y_ciclos.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Secuencias, Condiciones y Ciclos

          .col-lg-5.d-none.d-lg-block.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.svg', alt='')

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
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
