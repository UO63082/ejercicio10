class CotizacionGas 
{
    constructor() 
	{   
		/*
		 var par = 
		{
            q: nombre + ',es',
            appid: '5845fa741fdd4c09120268be84b8e496',
			units: 'metric',
            lang: 'es'
        };*/
		
		
		 var par1 = 
		{		
            auth_key:'TNBtZpkTQzaMyXxD9fazhZaYA9e6rcRCpYgSdw8F',
			limit:'10',
			page:'3000'
        };
		
		var par = 
		{		
            auth_key:'TNBtZpkTQzaMyXxD9fazhZaYA9e6rcRCpYgSdw8F',
			anio:'2021',
			mes:'11'
        };

		
		$.getJSON('https://api.desarrolladores.energiaabierta.cl/indicadores-diarios/v1/henryhub.json', par ,function (datos) 
		{
            console.log(datos);
        });	
	}
}

$(document).ready(function () 
{
    new CotizacionGas();

});



























