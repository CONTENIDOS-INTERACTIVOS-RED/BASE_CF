<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 2. Teorías y enfoques para la resolución pacífica de conflictos'" :subTitulo="'2. Enfoques de negociación, mediación y arbitraje'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=saXfavo1OQo" target="_blank" rel="noopener noreferrer") Charlas TEDx ( 8 de enero de 2016). El poder de escuchar | William Ury | TEDx San Diego
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Coser, LA (1956). Las funciones del conflicto social. Fondo de Cultura Económica.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span González Rey, F. (2016). Introducción a la teoría de la cooperación en conflictos. Ediciones Humanistas.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span La Rosa, M., & Rivas, P. (2017). Métodos alternativos de resolución de conflictos. Ediciones Jurídicas.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Marx, K. (1867). El capital. Siglo XXI Editores.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Mirabal, O. (2003). Fundamentos de negociación y mediación en conflictos. Editorial Universitaria.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Programa de las Naciones Unidas para el Desarrollo (PNUD). (2018). Herramientas para la resolución pacífica de conflictos. PNUD.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Universidad Tecnológica de México (UNITEC). (2016). Manual de comunicación efectiva y resolución de conflictos. UNITEC.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'20px'}")
              span Weber, M. (1922). Economía y sociedad: Esbozo de sociología comprensiva. Fondo de Cultura Económica.
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
