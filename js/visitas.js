const dt = firebase.firestore();

const guardarVisitas = (titulo)=>
  dt.collection('visitas').doc().set({
    titulo,
  });
  
window.addEventListener('DOMContentLoaded',async (e) => {
  e.preventDefault();
  
  
  //Eliminar los últimos elementos
  const cargarVisita = () => dt.collection('visitas').get();
  const querySnapshot = await cargarVisita();
  querySnapshot.forEach(doc => {
    console.log("Borrando",doc.data())

        const datos = doc.data();
        const datosid = doc.id;

        document.getElementById('visita').value = datos.titulo; 
          

        dt.collection("visitas").doc(datosid).delete().then(() => {
        console.log("Visitas Borrado Exitosamente");
        }).catch((error) => {
        console.error("Error al borrar: ", error);
        });
    
    });

    const valor = document.getElementById('visita').value;
    const titulo = Number(valor) +1;
    console.log(titulo)
    await guardarVisitas(titulo);
  
});