<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 1. Fundamentos del Pensamiento Algorítmico'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.justify-content-center
        .col-lg-7
          p.mb-4(data-aos="fade-up") A través de esta unidad, se reconocerán los fundamentos teóricos del pensamiento algorítmico; además, se utilizarán estructuras lógicas en la creación de algoritmos simples, para resolver problemas específicos.     

          p.mb-4(data-aos="fade-up") A lo largo de la unidad, se abordarán los conceptos de algoritmo y lógica, así como sus formas de representación mediante pseudocódigo y diagramas de flujo, lo cual permite analizar cada problema desde un enfoque sistémico, desarrollar soluciones adecuadas y llevarlas a la práctica mediante la implementación de algoritmos.


        .col-lg-5
          figure
            img(src='@/assets/curso/intro/1.png', alt='')

      
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-10
          .bg-color-1.p-4
            .row.justify-content-center.align-items-center
              .col-lg-auto
                figure
                  img(src='@/assets/curso/intro/2.svg', alt='')
              .col-lg
                p.mb-0 #[strong En resumen, se destacará la relevancia de diseñar algoritmos antes de iniciar el proceso de programación, resaltando su utilidad en la resolución de problemas y su aplicación práctica no solo en sistemas de información, sino también en campos como la administración y la educación.].

  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
