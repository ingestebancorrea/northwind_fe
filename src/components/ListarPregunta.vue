<template>
    <div class="main_container_pregunta">
        <div class="panel_arriba">
            <form @submit.prevent="processConsultaPregunta" class="form_pregunta_c">
                <div class="box1">
                    <label for="estudiante">Estudiante</label>
                    <br>
                    <select name="" id="" v-model="estudiante">
                        <option value=""></option>
                    </select>
                </div>
                <div class="box2">
                    <label for="prueba">Prueba</label>
                    <br>
                    <select name="" id="" v-model="prueba">
                        <option value=""></option>
                    </select>
                </div>
                <div class="box3">
                    <button type="submit">Consultar</button>
                </div>
            </form>
        </div>

        <div class="panel_debajo">
            <table border="1">
                <tr>
                    <th>Pregunta No.</th>
                    <th>Respuesta Correcta</th>
                    <th>Respuesta Estudiante</th>
                    <th>Acierto</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "../utils/axios";
    export default {
        name: "ListarPregunta",
        data: function(){
            return {
                estudiante: "",
                prueba: ""
            }
        },
        methods: {
            getData: async function(){
                axios.get(`resultado`, {headers: {}})
                .then(result => {
                    this.estudiante = result.data.estudiante;
                    this.prueba = result.data.prueba;
                }).cath(()=>{
                    console.log("Error")
                })
            },
            processConsultaPregunta: function(){
                axios.post("estudiante", this.estudiante, {headers: {}})
                .then(result => {
                    alert("Registro exitoso.");
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en la consulta.");
                });
            },
            created: async function(){
                this.getResultado()
            }
        }
    }

</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto");
    .main_container_pregunta{
        padding: 50px 10px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .panel_arriba{
        /*background-color: aqua;*/
        width: 80%;
        height: 20%;
        display: inline-block;
        flex-direction: row;
        font-family: 'Roboto';
        padding: 5px;
    }

    .form_pregunta_c{
        display: flex;
    }

    .box1{
        display: inline-block;
        /*background-color: antiquewhite;*/
        width: 40%;
    }

    .box2{
        display: inline-block;
        width: 40%;
        /*background-color: gray;*/
    }

    .box3{
        display: flex;
        width: 20%;
        /*background-color: aqua;*/
        padding-top: 10px;
    }

    .panel_arriba select{
        height: 35px;
        width: 90%;
        box-sizing: border-box;
        padding: 10px 20px;
        margin: 5px 0;
        border: 3px solid rgb(221, 221, 221);
        border-radius: 10px;
    }

    .panel_arriba button{
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

    .panel_arriba button:hover{
        background-color: red;
        color: #fff;
        border: 1px solid #283747;
        
    }

    .panel_debajo{
        background-color: gray;
        width: 80%;
    }

    table{
	  background-color: white;
	  text-align: left;
	  border-collapse: collapse;
	  width: 100%;
      font-family: 'Roboto','sans-serif';
    }

    th, td{
	  padding: 20px;
      text-align: center;
    }

    tr:nth-child(even){
	    background-color: #ddd;
    }

    tr:hover td{
	    background-color: red;
	    color: white;
    }

    @media(max-width: 858px){
        .main_container_pregunta{
            justify-content: center;
            padding: 10px 10px;
            width: 100%;
        }

        table{
            font-size: 12px;
        }

        .panel_arriba button{
            width: 100%;
            height: 40px;
            font-size: 15px;
        }

        .box1, .box2{
            width: 60%;
        }

        .box3{
            width: 40%;
        }

        .panel_arriba{
            width: 90%;
        }

        .panel_debajo{
            width: 90%;
            padding: 2px 4px;
        }
    }

</style>
