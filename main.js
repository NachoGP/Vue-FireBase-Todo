Vue.component('todo-list',{
   template:'#todo-template',
   data:function(){
      return {
         nuevaTarea: null,
         editandoTarea: null,
      }
   },
   props:['tareas'],
    //funcionalidad para agregar una nueva tarea, mediante un método:
    methods:{
      agregarTarea: function(tarea){
         // console.log(tarea);
         this.tareas.unshift({
            titulo:tarea, completado: false
         });
         this.nuevaTarea = '';
      },
      eliminarTarea: function(indice){
            this.tareas.splice(indice, 1);
      },
      editarTarea:function(tarea){
         console.info(tarea)
      }
   }

})
new Vue({
   el: 'body',
   //El modelo, tendrá tareas, una matriz de objetos
   data: {
      tareas:[
         {titulo:'Salir a correr', completado: false},
         {titulo:'Ir al Gimnasio', completado: false},
         {titulo:'Comprar Super', completado: true},
         {titulo:'Beber más agua', completado: true},
         {titulo:'Estudiar VueJS&Firebase', completado: true},
         {titulo:'Estudiar TDD para programar', completado: false},
   }, 
  
   });   