<template>
  <div id="app" class="app">
    <div class="header">
      <nav>
        <a class="enlace">
            <router-link to="/home"><img src="./assets/logo.png" alt="logo" class="logo" width="80"></router-link>
        </a>
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
          <img src="./assets/menu.png" alt="menu">
        </label>
        <ul>
          <li><a><router-link to="/estudiante">Estudiante</router-link></a></li>
          <li><a><router-link to="/resultado">Resultado</router-link></a></li>
          <li><a><router-link to="/prueba">Prueba</router-link></a></li>
          <li><a><router-link to="/pregunta">Pregunta</router-link></a></li>
        </ul>
      </nav>
    </div>

    <div class="main-component">
      <router-view/>
    </div>

    <div class="footer">
      <h2>@Nortwind</h2>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'App',
    data: function(){
      return {
      }
    }
  }
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto");
  *{
    margin:0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;/*Elementos no se salgan del contenedor*/
  }

  .header{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 50px;
    background-color: #08b1ff;
    color:#E5E7E9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto';
  }

  nav{
    height: 80px;
    width: 100%;
  }

  .enlace{
    position: absolute;
    padding: 10px 40px;
  }

  .logo{
    height: 60px;
  }

  nav ul{
    float: right;
    margin-right: 20px;
  }

  nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
    
  }

  nav ul li a{
    color: #fff;
    font-size: 18px;
    padding: 7px 13px;
    border-radius: 3px
  }

  li a.active, li a:hover{
    background: red;
    transition: .5s;
  }
  
  .checkbtn{
    font-size: 30px;
    color: #fff;
    float: right;
    line-height: 80px;/*centrar*/
    margin-right: 40px;
    cursor: pointer;
    display: none;/*ocultar menu*/
  }

  #check{
    display: none;
  }

  .main-component{
    height: 78vh;
    background: #FDFEFE;
    min-height: 100vh;
  }

  .footer{
    width: 100%;
    height: 10vh;
    min-height: 80px;
    background-color: #08b1ff;
    color: #E5E7E9;
    flex-wrap: wrap;
  }

  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
  }

  /*tablet*/
  @media (max-width: 952px){
    .enlace{
      padding-left: 20px;
    }

    nav ul li a{
      font-size: 16px;
    }

  }

  /*telefono*/
  @media (max-width: 858px){
    .header, .main-component, .footer{
      width: 100%;
    }
    
    .checkbtn{
      display: block;/*Mostrar icono*/
    }

    ul{
      position: fixed;
      width: 100%;
      height: 100vh;
      background: #12597d;
      top: 80px;
      left: -100%;/*mantener en linea*/
      text-align: center;
      transition: all .5s;
    }

    nav ul li{
      display: block;
      margin: 50px 0;
      line-height: 30px;/*espacio entre cada uno de los elementos*/
    }

    nav ul li a{
      font-size: 20px;
    }

    li a:hover, li a.active{
      background: none;
      color: red;
    }

    /*cuando el check se encuentre activado buscar ul*/
    #check:checked ~ ul{
        left:0;
    }
  }
</style>
