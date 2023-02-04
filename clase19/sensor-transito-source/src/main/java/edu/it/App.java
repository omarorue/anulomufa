package edu.it;

import com.google.gson.Gson;
import com.bolivarsoft.sensorvelocidad.*;
import com.bolivarsoft.sensorclima.*;


public class App {
    public static void main(String[] args) throws Exception {
                SensorClima sensorClima = new SensorClima();
		TipoClima datosClima = sensorClima.sensar();
                Gson gson = new Gson();

		for (;;) {
        	   SensorVelocidad sensorVelocidad = new SensorVelocidad();
        	   DatosVehiculo datosVehiculo = sensorVelocidad.sensarVehiculo();

        	   ClimaVehiculo climaVehiculo = new ClimaVehiculo(
        				datosClima,
        				datosVehiculo,
        				0
        			);

                   System.out.println(gson.toJson(climaVehiculo));
        }
    }
}
