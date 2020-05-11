$(document).ready(function(){
$("#presentacion").hide();
});

function realizarCalculos(){
    var fuente=parseInt($("#fuente").val());
    var resistencia=parseInt($("#resistencia").val());
    var capacitor=parseFloat($("#capacitor").val());
    var tiempo=parseInt($("#tiempo").val());
    var exponente = (-tiempo) / (resistencia * capacitor);
    var corrienteInicial =  fuente / resistencia;
    var cargaMaxima  = (fuente * capacitor) / 0.000001;

    var corriente = (corrienteInicial * Math.exp(exponente)) / 0.000001;
    var carga = (fuente * capacitor) * (1 - Math.exp(exponente));

    $("#lblInfo1").text( corrienteInicial.toFixed(15));
    $("#lblInfo2").text(  cargaMaxima.toFixed(15) );
    $("#lblInfo3").text(tiempo);
    $("#lblInfo4").text(corriente.toFixed(15));
    $("#lblInfo5").text(carga.toFixed(15));
    $("#presentacion").slideDown("slow");

}
 
function limpiaCampos(){
    $("#presentacion").slideUp("slow");

    $("#fuente").val("");
    $("#resistencia").val("");
    $("#capacitor").val("");
    $("#tiempo").val("");
}

function notacionCientifica(numero){
        
    return new DecimalFormat("#.###############").format(numero);
    
}