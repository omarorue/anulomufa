package edu.it;

import com.bolivarsoft.sensorclima.TipoClima;
import com.bolivarsoft.sensorvelocidad.DatosVehiculo;

public class ClimaVehiculo {
	public TipoClima tipoClima;
	public DatosVehiculo datosVehiculo;
	public Integer limitePermitido;
	
	public ClimaVehiculo(TipoClima tipoClima, DatosVehiculo datosVehiculo, Integer limitePermitido) {
		this.tipoClima = tipoClima;
		this.datosVehiculo = datosVehiculo;
		this.limitePermitido = limitePermitido;
	}
	public ClimaVehiculo() {
		
	}
}
