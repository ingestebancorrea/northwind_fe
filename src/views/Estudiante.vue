<template>
    <div class="contenedor">
        <div class="panel_izquierdo">
            <CrearEstudiante></CrearEstudiante>
        </div>
        <div class="panel_derecho">
            <ListarEstudiante></ListarEstudiante>
        </div>
    </div>
</template>

<script>
    import CrearEstudiante from "@/components/CrearEstudiante.vue";
    import ListarEstudiante from "@/components/ListarEstudiante.vue";
    export default {
        name: "Estudiante",
        components: {
            CrearEstudiante,
            ListarEstudiante
        }
    }
</script>

<style>
    .contenedor{
        display: flex;/*Generar disposición flexible para agruparse en linea*/
        height: auto;
        width: 100%;
        flex-direction: row;/*por defecto siempre esta en row*/
        flex-wrap: wrap;/*Si puede caer el elemento*/ 
    }

    .panel_izquierdo{
        width: 30%;
        height: 100%;
        /*background-color: aqua;
        min-width: 300px;*/
        justify-content: center;
    }

    .panel_derecho{
        width: 70%;
        height: 100%;
        /*background-color: bisque;*/
        min-width: 300px;
    }

    @media(max-width: 858px){
        .panel_izquierdo, .panel_derecho{
            width: 100%;
            padding: 10px 10px;
        }  
    }

</style>
