class CotizacionGas 
{
    constructor() 
	{   	
		this.fecha;
		this.precio;
		this.getPrecioGasNatural();
	}

	getPrecioGasNatural()
	{   
		//OPCION 1 
		var url = 'https://api.tradingeconomics.com/markets/historical/ng1:com?c=guest:guest';
		$.ajax({
			url: url, 
			type: "GET", 
			dataType: 'json'
		}).done(function (data) {
			
			this.fecha = JSON.stringify(data[0].Date);
			//Extraigo precio
			this.precio = data[0].Close;
			//Guardo en la tabla la fecha
			$("tr:not(:first) td").eq(0).text(JSON.parse(this.fecha));
			//Guardo en la tabla la cotizacion
			$("tr:not(:first) td").eq(1).text(this.precio);	
		});	
		
		//OPCION 2
		
		/*
		// Para mas informacion https://desarrolladores.energiaabierta.cl/
		
		//Si funciona la API con estos parametros:
		var par0 = 
		{		
            auth_key:'TNBtZpkTQzaMyXxD9fazhZaYA9e6rcRCpYgSdw8F',
			limit:'2',
			page:'3000'
        };
		
		//NO funciona la API con estos parametros por año ni mes, ni tampoco la funcion orderedBy()
		var par1 = 
		{		
            auth_key:'TNBtZpkTQzaMyXxD9fazhZaYA9e6rcRCpYgSdw8F',
			anio:'2021',
			mes:'10'
        };
		
		$.getJSON('https://api.desarrolladores.energiaabierta.cl/indicadores-diarios/v1/henryhub.json', par0 ,function (datos) 
		{
            console.log(datos); //Para ver el objeto devuelto en un integridad
			//Extraigo fecha
			this.fecha = datos.data[0][0];
			//Extraigo precio
			this.precio = datos.data[0][1];
			$("tr:not(:first) td").eq(0).text(this.fecha);
			$("tr:not(:first) td").eq(1).text(this.precio);
        });		
		*/
	}		
}

$(document).ready(function () 
{
    new CotizacionGas();

});



























