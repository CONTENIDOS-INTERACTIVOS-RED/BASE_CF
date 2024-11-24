<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Fundamentos del Pensamiento Algorítmico'" :subTitulo="'1. Definición de algoritmo'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden


    p.mb-4(data-aos="fade-up") La palabra algoritmo proviene del matemático Muhammad ibn Musa al-Khwarizmi, quien vivió en el siglo IX en Persia, e implementó métodos sistémicos que resolvían problemas matemáticos. Turing en 1936, inspiró el concepto moderno de algoritmo, a través de su Máquina de Turing y creó un modelo teórico para describir el procesamiento de los algorítmicos, sentando las bases de la ciencia computacional.


    .row.justify-content-center.mb-5
      .col-lg-7
        p.mb-4(data-aos="fade-up") Al implementar una secuencia de pasos lógicos finitos que resuelven un problema particular y que permiten visibilizarlo de manera gráfica, se está definiendo el concepto de un algoritmo. #[strong “Un algoritmo se espera resuelva un problema” (Joyanes, 2008, p. 13)]. Si bien, entender que para cada proceso debe existir una secuencia lógica de instrucciones hace parte importante en el desarrollo de un algoritmo, también se debe tener en cuenta el hecho que este deberá resolver una situación puntual, así; el algoritmo estará diseñado con un propósito, siguiendo un procedimiento y llegando a la solución, de la manera más eficiente posible. 

        p.mb-4(data-aos="fade-up") Para conocer los múltiples usos de los algoritmos en la actualidad, lo invitamos a ver los siguientes videos:

        a.anexo.mb-4.bg-white.w-fit(href="https://youtu.be/U3CGMyjzlvM" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-video.svg")
          .anexo__texto
            p <strong>Video. </strong> ¿Qué son los algoritmos? 

        a.anexo.mb-4.bg-white.w-fit(href="https://youtu.be/RSJrBEhdZxw" target="_blank")(data-aos="flip-up")
          .anexo__icono(:style="{'background-color': '#FCDFDB'}")
            img(src="@/assets/template/icono-video.svg")
          .anexo__texto
            p <strong>Video. </strong> Qué son los algoritmos y cómo aprenden de nosotros  

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/1.svg', alt='')


    .SplitContainer
      .row.justify-content-center  
        .col-10
          .yellowCard(data-aos="fade-up")
            p.mb-0 En nuestro día a día, nos enfrentamos “sin querer” o muchas veces “sin percatarnos”, a la utilización de algoritmos para resolver situaciones cotidianas como levantarse  de la cama, ir a la ducha, preparar el desayuno, tomar el autobús, etc.; se está llevando a cabo una secuencia de pasos lógicos que permite tomar decisiones, seleccionar la mejor manera de llevar a cabo la actividad y, por último, solucionarla. Aquí se ha construido en cada ejemplo, un algoritmo que, aunque no se visualiza como tal por tratarse de una actividad que se ejecuta de manera casi que “automática”, el cerebro tuvo la capacidad de hacerlo y a continuación se explicará el porqué.
    .PurpleContainer.pt-5.mb-5
      .row.justify-content-center
        .col-10
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6
              h2(data-aos="flip-up") Ejemplo 1
              p(data-aos="fade-up").mb-4 #[strong Situación problema: ] ducharse.
              p(data-aos="fade-up").mb-4 #[strong Solución:] terminar limpio después de la ducha.
              p(data-aos="fade-up").mb-4 #[strong Procedimiento:] 
            .col-lg-6
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/2.png', alt='')
            
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6
              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Inicio
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Ingreso a la ducha.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Abrir la llave.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Regular la temperatura.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Remojarse.
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Cerrar la llave.

            .col-lg-6
              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 7
                  | Aplicar jabón.
                li 
                  .lista-ol--cuadro__vineta
                    span 8
                  | Abrir nuevamente la ducha.
                li 
                  .lista-ol--cuadro__vineta
                    span 9
                  | Regular nuevamente la temperatura.
                li 
                  .lista-ol--cuadro__vineta
                    span 10
                  | Ducharse.
                li 
                  .lista-ol--cuadro__vineta
                    span 11
                  | Cerrar la llave.
                li 
                  .lista-ol--cuadro__vineta
                    span 12
                  | Fin.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-up") En el ejemplo 1, se puede aclarar de una manera mucho más sencilla, el concepto de algoritmo, sus componentes integradores y su propósito; también se puede observar como  un proceso sencillo, al llevarlo a un paso a paso, deberá determinar de manera clara y lo más precisa posible, la secuencia de instrucciones para que se resuelva en un feliz término. 

        p(data-aos="fade-up") Adicionalmente, se puede aumentar la complejidad del mismo, incluyendo subprocesos que permitan ejecutar acciones concretas a la hora de llevar a cabo el objetivo principal del algoritmo; por ejemplo, se citó puntualmente “aplicar jabón” pero se debió ubicar el jabón dentro de la ducha, tomarlo, aplicar el jabón y por último, volverlo a poner en su lugar, para continuar con el proceso inicial; este tipo de subrutinas, aumentan la complejidad del algoritmo y lo convierten en una secuencia detallada que permitirá no “tener pierde” a la hora de ejecutarse.

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/3.png', alt='')


    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-10
        .bg-color-1.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/4.svg', alt='')
            .col-lg
              p.mb-0 #[strong Los algoritmos cualitativos realizan procedimientos sin la utilización de matemáticas], solamente procesos y está ligado directamente al tipo de pensamiento de la persona que lo realiza. Ejemplo: retirar dinero de un cajero automático. Los algoritmos cuantitativos requieren de cálculos matemáticos para su elaboración. Ejemplo: obtener los números primos del 1 al 100.

    
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/5.png', alt='')
      .col-lg-7
        p(data-aos="fade-up") El problema a resolver, permite establecer el objetivo específico a la hora de construir un algoritmo; si se resuelve o no, podrá considerarse que:
        AcordionA(tipo="b")
          .div(titulo="El algoritmo es correcto")
            p Se analizarán los conceptos fundamentales de paz negativa y paz positiva (Galtung, 1996), y se explorará el enfoque de la cultura de paz, tal como lo promueve la UNESCO.
          .div(titulo="El algoritmo es incorrecto")
            p Si la solución no finaliza como se espera al ingresar los datos correctos para llevar a cabo el procedimiento, o se obtiene como resultado una salida diferente a la esperada.
        p Si el algoritmo soluciona el problema, se considera que es correcto. 


    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5.order-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/6.png', alt='')
      .col-lg-7.order-1
        p(data-aos="fade-up") Un algoritmo es un método para resolver problemas y para lograrlo, se puede aplicar el siguiente procedimiento sugerido: 
        AcordionA(tipo="b")
          .div(titulo="Definición del problema")
            p En esta definición es relevante determinar con claridad el objetivo final del algoritmo, qué se desea resolver y qué se espera del sistema.
          .div(titulo="Definición de variables de entrada y salida")
            p En la etapa de definición de variables de entrada y salida se tendrá en cuenta el resultado que se espera al finalizar el proceso e incluir los datos de entrada necesarios para que dicho proceso entregue el  final esperado.
          .div(titulo="Establecer la estructura de procesamiento de datos")
            p Al establecer la estructura de procesamiento de datos, se utilizará la lógica para definir el procedimiento y la manera como el algoritmo logrará llevar a cabo el procesamiento de los parámetros iniciales, para presentar, como resultado, la variable o variables de salida, esperadas.


    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/7.svg', alt='') 
      .col-lg-7
        p(data-aos="fade-up") Las características que un algoritmo debe contemplar, son:

        .bg-color-1.px-4.py-3(v-for="item in items" :key="item.text" data-aos="fade-up").mb-3
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/bullets/icon-1.svg' alt='' style="width: 20px;")
            .col
              p.mb-0 {{ item.text }}


    .PurpleContainer.pt-5
      .row.justify-content-center
        .col-10
          h2(data-aos="flip-up") Ejemplo 2
          p.mb-4(data-aos="fade-up") Un estudiante llega a la biblioteca universitaria para solicitar un libro, el administrativo del lugar consulta en el sistema el nombre del libro, la ficha técnica y determina si es posible realizar el préstamo o no; a continuación, se redacta un algoritmo que puede resolver la situación. 


          .row.justify-content-center.align-items-start.mb-5
            .col-lg-6
              p(data-aos="fade-up").mb-3 #[strong Situación problema: ] ducharse.
              p(data-aos="fade-up").mb-3 #[strong Solución:] terminar limpio después de la ducha.
              p(data-aos="fade-up") #[strong Procedimiento:] 
              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Inicio
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Recibe solicitud de préstamo por parte del estudiante.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | El administrativo examina el repositorio y consulta la disponibilidad del libro. 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Si la biblioteca cuenta con el libro para el préstamo, el administrativo lo hace efectivo; de lo contrario, rechaza la solicitud. 
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Fin.
            .col-lg-6
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/8.png', alt='')

    .SplitContainer2.mb-5
      .row.justify-content-center  
        .col-lg-9
          .bg-color-white.shadow-soft.py-4.px-lg-5(data-aos="fade-up")
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Ejemplos de algoritmos
                    p.mb-0 Si desea conocer más ejemplos de algoritmos, consulte el libro: Joyanes Aguilar, L. (2006). Programación en C++: algoritmos, estructuras de datos y objetos (2 ed.). McGraw-Hill. 
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/ereader/tecnologicadeloriente/50088?page=54" target="_blank")
                      span Ir al sitio web
                      i.fas.fa-arrow-right

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-5.order-2
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/9.png', alt='')
      .col-lg-7.order-1
        p(data-aos="fade-up") Un algoritmo es un método para resolver problemas y para lograrlo, se puede aplicar el siguiente procedimiento sugerido: 
        AcordionA(tipo="b")
          .div(titulo="Proceso")
            p Se puede entender como un conjunto de instrucciones que “manipulan” los datos ingresados al sistema, para entregar como resultado, la solución esperada al problema.
          .div(titulo="Procedimiento o subprograma")
            p Permite ejecutar cuantas veces sea necesario, un proceso dentro de un programa, ahorrando tiempo y mejorando la eficiencia en el sistema; no es lo mismo realizar 10 veces una multiplicación, a llamar un subprograma que realiza la multiplicación y entrega el resultado.
          .div(titulo="Programa")
            p Concepto elaborado por Von Neumann en 1946 y lo define como “conjunto de instrucciones que sigue la computadora, para alcanzar un resultado específico”.

    p.mb-5(data-aos="fade-up") En conclusión, un algoritmo se puede resumir en tres partes: #[strong entrada, proceso, salida.]

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Sistema 

    p.mb-5(data-aos="fade-up") Para entender un algoritmo se debe hablar de un sistema, entendiéndose este último como un conjunto de elementos que tienen una relación directa entre sí y que interactúan de manera coordinada, para obtener un objetivo específico. 

    p.mb-5(data-aos="fade-up") Un sistema se caracteriza por: 

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6
        .bg-color-white.shadow-soft.py-4.px-lg-5.h-100(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/10.svg' alt='' style="width: 90px;")
            .col
              h4.mb-2 Entrada (Input)
              p.mb-0 Datos que requiere el algoritmo para funcionar. 

      .col-lg-6
        .bg-color-white.shadow-soft.py-4.px-lg-5.h-100(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/10.svg' alt='' style="width: 90px;")
            .col
              h4.mb-2 Procesamiento
              p.mb-0 Aquí se lleva a cabo la “transformación” de los datos de entrada y se logra el objetivo del algoritmo. 

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6
        .bg-color-white.shadow-soft.py-4.px-lg-5.h-100(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/12.svg' alt='' style="width: 90px;")
            .col
              h4.mb-2 Salida (Output)
              p.mb-0 Resultado final del sistema. 

      .col-lg-6
        .bg-color-white.shadow-soft.py-4.px-lg-5.h-100(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/13.svg' alt='' style="width: 90px;")
            .col
              h4.mb-2 Retroalimentación (Feedback)
              p.mb-0 Una vez terminado  el algoritmo, se pueden hacer ajustes para mejorar su eficiencia y calidad, mejorando su desempeño y funcionamiento.



    .PurpleContainer.pt-5.mb-5
      .row.justify-content-center
        .col-10
          h2(data-aos="flip-up") Ejemplo 3
          p.mb-4(data-aos="fade-right") Si se desea redactar una carta en un procesador de texto, deberá utilizar el teclado del ordenador para ingresar los caracteres (entrada); el sistema las incluirá dentro del procesador de texto (procesamiento) y por último tendrá la carta lista (salida). 

          p(data-aos="fade-up") El proceso suena sencillo debido a que se ha convertido en una tarea habitual para todos, pero al describir los pasos, se puede caracterizar un algoritmo de la siguiente manera:


          .row.justify-content-center.align-items-start.mb-5
            .col-lg-6
              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | #[strong Entrada:] cadenas de caracteres del teclado.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | #[strong Procesamiento:] utilización de la CPU para recibir las variables de entrada en código binario, procesarlas y presentarlas en la pantalla, como cadenas de texto entendibles para el usuario. 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | #[strong Salida:] mensaje de la carta. 
            .col-lg-6
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/14.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-5(data-aos="fade-up") Del#[strong ejemplo 3], cabe resaltar que el funcionamiento del teclado está ligado al hardware y software del computador; no se podría establecer una conexión directa entre el teclado y el monitor, sin haber tenido un tratamiento desde la unidad central de procesamiento; todo el equipo de cómputo en conjunto, permite que el usuario pueda “operar” sin contratiempos, cada dispositivo; estos, a su vez, suministran los datos requeridos para que la CPU pueda establecer prioridades y dar un orden a cada petición del usuario y, por último, representar las peticiones del usuario a través del monitor. 


        .titulo-figura.mb-4(data-aos="flip-up")
          h5 Figura 1. 
          span Interacción usuario-computador
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/figuras/figura1.png', alt='').mx-auto


        .bg-color-2.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/15.svg', alt='')
            .col-lg
              p.mb-0 Se establece una interacción directa Usuario – Computador – Teclado - CPU – Mensaje; es decir, se requiere que cada elemento que integra el sistema, funcione correctamente, para obtener los resultados esperados. Para clasificar los sistemas, según su nivel de interacción con el entorno, es importante conocer los tipos. 

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/16.png', alt='')
          .col-lg-8
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' style="width: 90px;").mx-auto.mb-4
                h5.text-center.mb-4 Sistemas abiertos
                p Interactúan con el entorno y los cambios los afectan directamente y deben adaptarse para mejorar o sobrevivir.
                p.mb-0 #[strong Ejemplos:] empresas, hospitales.

              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' style="width: 90px;").mx-auto.mb-4
                h5.text-center.mb-4 Sistemas cerrados
                p Operan de manera autónoma y tienen poca o nula interacción con el entorno; generalmente se ejecutan en entornos controlados.
                p.mb-0 #[strong Ejemplos:] reloj mecánico, invernadero.

              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' style="width: 90px;").mx-auto.mb-4
                h5.text-center.mb-4 Sistemas naturales
                p Son los que hacen referencia a la naturaleza y operan sin intervención humana.
                p.mb-0 #[strong Ejemplos:] bosque, sistema nervioso.

              .bg-color-white.p-3.py-md-5.px-md-4.box-shadow.h-100.brounded-sm
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' style="width: 90px;").mx-auto.mb-4
                h5.text-center.mb-4 Sistemas artificiales
                p Creados por humanos con una finalidad específica, facilitan tareas o proporcionan servicios.
                p.mb-0 #[strong Ejemplos:] sistemas operativos, banca.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-5(data-aos="fade-up") Se puede inferir que los sistemas se diferencian, según su grado de interacción con el entorno que los rodea y su propósito; los sistemas abiertos deben adaptarse a los cambios constantes y los sistemas cerrados se llevan a cabo en ambientes mucho más controlados; los sistemas naturales respetan las leyes de la naturaleza y permanecen en un equilibrio constante con su entorno y los sistemas artificiales fueron diseñados para cumplir una función específica y apoyar tareas cotidianas. Cada sistema tiene una finalidad; entender su funcionamiento y conocer sus características, permite administrarlos de manera más eficiente. 

        .bg-color-2.p-4.mb-4
          p.mb-0 Para el desarrollo de los algoritmos, es esencial el pensamiento sistémico y el lógico, porque así se podrán establecer, no solo el paso a paso para encontrar una solución (sistémico), sino también el procedimiento que se deberá llevar a cabo (lógico), para que dicha solución esté acorde con lo esperado como parámetro de salida en el algoritmo.   

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/21.png', alt='')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Pensamiento sistémico o pensamiento lógico 

    p.mb-5(data-aos="fade-up") Al abordar los algoritmos, es indispensable hablar de dos tipos de pensamientos: el pensamiento sistémico y el pensamiento lógico; ambos se requieren para comprender el sistema y cómo se deberá realizar el procesamiento de los datos, para encontrar una solución eficiente y acorde con las necesidades de su entorno. 
    p.mb-5(data-aos="fade-up") Si bien, ambos tipos de pensamiento tienen corrientes diferentes, en los sistemas de información se relacionan y coexisten de manera natural, entendiéndose sus diferencias. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-figura.mb-2
          h5 Tabla1 .
          span Comparación derecho objetivo y derecho subjetivo

        .tabla-a.mb-5
            table
              thead
                tr
                  th Aspecto
                  th Pensamiento Sistémico
                  th Pensamiento Lógico

              tbody
                tr
                  td #[strong Definición]
                  td Se analiza el todo y la interacción del sistema con cada una de sus partes.
                  td Método secuencial estructurado que sigue unas reglas definidas y cuyo objetivo es encontrar una conclusión válida.
                tr
                  td #[strong Enfoque]
                  td General, holístico: se debe concentrar la atención en el todo, en cada detalle, en el grado de interacción de cada elemento.
                  td Lineal, secuencial: sigue pasos lógicos estructurados y secuenciales, para resolver el problema planteado.
                tr
                  td #[strong Ejemplos]
                  td Gestiones administrativas. Análisis de ecosistemas.
                  td Programación de algoritmos. Demostraciones matemáticas.
                tr
                  td #[strong Naturaleza]
                  td No lineal, admite retroalimentación, múltiples procesos para una misma solución.
                  td Lineal, sigue una estructura clara desde el inicio hasta el fin.
                tr
                  td #[strong Retroalimentación]
                  td En busca de la optimización constante del sistema.
                  td Se llega a la solución y no se requiere ajuste del sistema o alguna optimización.


    .bg-color-3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg
          .px-5
            p.mb-0(data-aos="fade-up") El #[strong pensamiento lógico] se relaciona con matemática estructural y permite, a partir de la aplicación de secuencias funcionales, encontrar la solución a un problema; el #[strong pensamiento sistémico] requiere de la lógica matemática, en muchos casos para contemplar una parte de la solución del problema inicial, pero también contempla la interacción de cada parte del sistema, para no solo resolver el sistema, sino también optimizarlo, mejorarlo y hacerlo cada vez más eficiente. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/22.png', alt='')

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Eficiencia de los algoritmos

    p.mb-5(data-aos="fade-up") Al realizar un algoritmo, se pueden encontrar diferentes recursos que llegan a la misma solución; el concepto de “Eficiencia” hace referencia a tomar el algoritmo para que de manera más óptima, llegue a la solución; tendría la desventaja que para encontrar el algoritmo eficiente, se verá en la necesidad de construir diferentes prototipos del mismo algoritmo, aunque el hecho de realizar un algoritmo, puede implicar un esfuerzo: hacerlo para resolver la misma situación desde diferentes perspectivas algorítmicas, debe considerarse si se desea seleccionar el más eficiente. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/23.png', alt='')
      .col-lg-8
        .bg-color-4.p-4.mb-5(data-aos="fade-up")
          p.mb-0 La calidad de un algoritmo se mide según su eficiencia; esta se puede traducir como el uso de los recursos requeridos para llevar a cabo la tarea que se ejecuta. Así, en términos computacionales, un algoritmo de calidad deberá consumir en la medida de lo posible, la menor cantidad de recursos para su ejecución (memoria, procesador, etc.).

        p.mb-0(data-aos="fade-up") Otro aspecto clave con respecto a la eficiencia, es el tiempo; este factor se verá afectado por la cantidad de datos de entrada, la calidad del código, equipo donde se ejecuta el programa y su complejidad. Diseñar un algoritmo debe contemplar siempre la complejidad; a menor complejidad, mayor será la eficiencia, puesto que se traduce en menor tiempo de ejecución y menor consumo de recursos en el equipo que se ejecute. 
        

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
  name: 'Tema1',
  data() {
    return {
      items: [
        {
          text: 'Siempre debe tener un inicio.',
        },
        {
          text:
            'Deberá ser preciso, contemplar el orden estructural y secuencial del proceso y establecer prioridades.',
        },
        {
          text:
            'Debe estar definido, lo que a su vez traduce en que cada vez que se ejecute el algoritmo, se obtienen los mismos resultados.',
        },
        {
          text:
            'Siempre debe tener un fin, deberá terminar el algún momento; es decir, un número de pasos establecido.',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.SplitContainer
  background: rgb(85,122,250)
  background: linear-gradient(0deg, rgba(232,238,253,1) 0%, rgba(232,238,253,1) 50%, rgba(255,255,255,1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB

.PurpleContainer
  background-color: rgb(232,238,253)

.SplitContainer2
  background: rgb(85,122,250)
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(232,238,253,1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB
</style>
