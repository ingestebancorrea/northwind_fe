<template>
    <div class="main_container_estudiante">
        <table border="1">
            <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Grado</th>
                <th>Salon</th>
                <th colspan="2">Opciones</th>
            </tr>
            <tr v-for="estudiante in estudiantes.data" :key="estudiante.id">
                <td>{{estudiante.id}}</td>
                <td>{{estudiante.nombres}}</td>
                <td>{{estudiante.grado}}</td>
                <td>{{estudiante.salon}}</td>
                <td><img src="../assets/editar.png" alt="modificar"><button @click="putEstudiante(estudiante.id)">Modificar</button></td> 
                <td><img src="../assets/eliminar.png" alt="eliminar"><button @click="deleteEstudiante(estudiante.id)">Eliminar</button></td> 
            </tr>
        </table>
    </div>
</template>

<script>
    import axios from "../utils/axios";
    export default {
        name: "ListarEstudiante",
        data: function(){
            return {
                estudiantes: []
            }
        },
        methods: {
            getEstudiante: async function(){
                axios.get(`estudiante`)
                .then(result => {
                    this.estudiantes = result.data
                }).cath((error)=>{
                    alert(error)
                })
            },
            putEstudiante: async function(estudianteId){
                axios.put(`estudiante/${estudianteId}/`, 
                { nombre: this.nombre}, 
                {headers: {"Authorization": `Bearer ${token}`}})
                .then(result => {
                    alert('Estudiante actualizado exitosamente')
                }).catch(()=>{
                    alert('Error al actualizar Estudiante')
                })
            },
            deleteEstudiante: async function(estudianteId){
                axios.delete(`estudiante/${estudianteId}`, {headers: {}})
                .then(result=> {
                    alert('Estudiante eliminado exitosamente');
                }).catch(error=>{
                    alert('Error al eliminar estudiante');
                })
            }
        },
        mounted(){
            this.getEstudiante();
        }
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto");
    .main_container_estudiante{
        padding: 50px 10px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .main_container_estudiante button{
        width: 60%;
        color: #fff;
        background-color: #12597d;
        border: 1px solid #12597d;
        border-radius: 5px;
        padding: 10px 25px;
        cursor: pointer;
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

    table button{
        cursor: pointer;
    }

    @media(max-width: 858px){
        .main_container_estudiante{
            justify-content: center;
            padding: 10px 80px;
            width: 100%;
            
        }
        
        table{
            font-size: 12px;
        }

        .main_container_estudiante button{
            width: 100%;
            padding: 10px 10px;
            font-size: 10px;
        }
    }
</style>
