// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
	$('#btnjugar').on('tap',function(){
		audio
		var basedatos=window.sqlitePlugin.
		openDatabase({name: "coloresBD.db",
		createFromLocation:1});
		var pantalla=$.mobile.gatScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla-encabezado-pie)/2;
		
		$('.cuadro').height(alto);
		
		//alert('Pantalla ' + pantalla);
		//alert('Encabezado ' + encabezado);
	});//btnjugar-click
	
	$('.cuadro').on('vmousedown',function(){
		$(this).addClass('pulsado');
	});
	
	$('.cuadro').on('vmouseup',function(){
		$(this).removeClass('pulsado');
	});
	
	function quien(q)
	{
	return q.substring (1);
	}
	function cargarnombrejugador()
	{
		basedatos.transaction(function(ejecutar){
			var sql ="SELECT NombreUsuarioFROM Usuario";
			ejecutar.executeSQL(sql, undefined,
			function(Ejecutar,resultado){
				var datosJugador=resultado.rows.item(0);
				$('#jugador').text()(datosJugador.NombreUsuario);
			});
		});
	
	
	$('#btnconfiguarar').on('tap',function(){
	 $('#txtnombre').val($('#jugador').text());
	});s
	$('#btnguardar').on('tap',function(){
		var nuevonombre=$('#txtnombre').val();
		basedatos.transaction(function(consulta){
			consulta.executeSql ("UPDATE Ususario SET NombreUsuario=? 
			WHERE ClaveUsuario='1';".[nuevonombre]);
			
			)};
			cargarnombrejugador();
	});
//}); 
});