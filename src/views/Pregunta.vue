<template>
    <div class="contenedor">
        <div class="pregunta_container">
            <ListarPregunta></ListarPregunta>
        </div>
    </div>
    
</template>

<script>
    import ListarPregunta from "@/components/ListarPregunta.vue";
    export default {
        name: "Pregunta",
        components: {
            ListarPregunta
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

    .pregunta_container{
        width: 100%;
        height: 100%;
        /*background-color: aqua;
        min-width: 300px;*/
        justify-content: center;
    }

    @media(max-width: 858px){
        .pregunta_container{
            width: 100%;
        }  
    }

</style>