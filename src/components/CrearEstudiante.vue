<template>
    <div class="registar_estudiante">
        <div class="container_registar_estudiante">
            <h2>Registrar Estudiante</h2>
            <br>
            <form @submit.prevent="processEstudiante">
                <input type="text" v-model="estudiante.nombres" placeholder="Nombres">
                <br>
                <input type="text" v-model="estudiante.grado" placeholder="Grado">
                <br>
                <input type="text" v-model="estudiante.salon" placeholder="Salon">
                <br><br>
                <button type="submit">Registrar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from '../utils/axios'
    export default {
        name: "CrearEstudiante",
        data: function(){
            return {
                estudiante: {
                    nombres: "",
                    grado: "",
                    salon: "",
                }
            }
        },
        methods: {
            processEstudiante: function(){
                axios.post("estudiante", this.estudiante, {headers: {}})
                .then(result => {
                    alert("Registro exitoso.");
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");
                });
            }
        }
    }
</script>

<style >
    @import url("https://fonts.googleapis.com/css2?family=Roboto");
    .registar_estudiante{
        margin: 0;
        padding: 50px 0px;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }  

    .container_registar_estudiante {
        padding-top: 20px;
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }       

    .registar_estudiante h2{
        color: black;
        font-family: 'Roboto';
        text-align: center;
    }

    .registar_estudiante form{
        width: 70%;
    }
    
    .registar_estudiante input{
        height: 35px;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border: 3px solid rgb(221, 221, 221);
        border-radius: 10px;
    }

    .registar_estudiante button{
        width: 100%;
        height: 40px;
        color: #fff;
        background-color: #12597d;
        border: 1px solid #12597d;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0 25px 0;
        cursor: pointer;
    }

    .registar_estudiante button:hover{
        background-color: red;
        color: #fff;
        border: 1px solid #283747;
    }

    @media(max-width: 858px){
        .registar_estudiante h2{
            font-size: 16px;
        }

        .registar_estudiante form{
            font-size: 12px;
        }
    }
        
</style>
