<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 1. Fundamentos del Pensamiento Algorítmico'" :subTitulo="'SINTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 En esta unidad 2, Dibujo en proyección y representación de vistas, se explora el uso de la proyección ortogonal en el dibujo técnico, esencial para representar objetos tridimensionales en dos dimensiones mediante vistas planas, como la frontal, superior y lateral. Este método es clave en ingeniería, arquitectura y diseño industrial. Se detallan tipos de proyecciones como la multivista, isométrica, dimétrica, trimétrica y caballera, junto con la importancia de las vistas y las normas ISO para su disposición. Finalmente, se abordan tolerancias y ajustes, cruciales para un ensamblaje preciso y la funcionalidad de los componentes.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/sintesis/sintesis.svg', alt='')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>