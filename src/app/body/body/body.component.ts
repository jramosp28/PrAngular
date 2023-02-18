import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  clase: string[] =["D","E","P","O","R","T","I","S","T","A","S"];

  futbolistas = [
    {
      nombre: 'Cristiano Ronaldo',
      deporte: 'Futbolista',
      descripcion: 'Se crio en un barrio obrero y a los diez años lo descubrió el Sporting de Lisboa, Cristiano Ronaldo jugaba por entonces en el modesto Andorinha, club de su Funchal natal y en el que su padre trabajaba como utillero. Cuatro años después, acordó con su madre dedicarse exclusivamente al fútbol. Después Ronaldo pasó al Nacional y seis meses después este realiza la cesión de los derechos de Cristiano. En 2001, el técnico del primer equipo, el rumano Laszlo Boloni, quiso que debutara ese mismo año, pero un test lo desaconsejó por no estar lo suficientemente trabajado. Un año después lo hacía debutar en la previa de la Champions ante el Inter.',
      imagen: '../../../assets/cr7.jpeg'
    },
    {
      nombre: 'Lionel Messi',
      deporte: 'Futbolista',
      descripcion: 'Con cinco años se inició en el Grandoli, un pequeño equipo de su barrio que entrenaba su padre. En 1995, pasó a entrenarse en las categorías inferiores de Newells Old Boys, club con el que ganó la Copa de la Amistad de Perú en 1997. A los ocho años le diagnosticaron una deficiencia en la hormona del crecimiento, que le impedía tener un desarrollo físico normal. El tratamiento era muy caro y sus padres no podían costearlo.',
      imagen: '../../../assets/lm.jpeg'
    }
  ];

  basquetbolistas = [
    {
      nombre: 'Lebron James',
      deporte: 'Basquetbolista',
      descripcion: 'Eligió jugar con el dorsal 23, por ser el dorsal de su ídolo Michel Jordan. Otros de sus ídolos fueron Penny Hardaway y Jason Kidd. Con 17 años ya medía 2.00 metros de estatura. Su equipo en el instituto fue el Fighting Irish. Durante su paso por la High School llegó a las cifras de 2.657 puntos, 892 rebotes y 523 asistencias, llegando a acaparar la atención de grandes estrellas del deporte como Shaquille O'+'Neal y siendo televisados algunos partidos suyos a nivel nacional. Quiso entrar en el Draft de la NBA sin haber terminado el instituto, pero no se lo permitieron. Fue nombrado Mr. Basketball en tres ocasiones consecutivas, Mejor Jugador de Instituto 2003 así como otros trofeos de MVP.',
      imagen: '../../../assets/lb.jpeg'
    },
    {
      nombre: 'Stephan Curry',
      deporte: 'Basquetbolista',
      descripcion: 'En 2009 Stephen Curry fue elegido en séptima posición del draft de la NBA de 2009 por los Golden State Warriors. Firmó un contrato por 12.7 millones de dólares por cuatro temporadas. Jugó su primer partido como base en la NBA 28 de octubre de ese mismo año contra los Houston Rockets. En su primera temporada fue seleccionado para el primer equipo de los All-Rookie. Consiguió su primer triple-doble en febrero de 2010, 36 puntos, 13 asistencias y 10 rebotes. En su segunda temporada fue galardonado con el NBA Sportsmanship Award.',
      imagen: '../../../assets/sc.jpeg'
    }
  ];

  tenistas = [
    {
      nombre: 'Rafael Nadal',
      deporte: 'Tenista',
      descripcion: 'Considerado como el mejor tenista de toda la historia en pistas de tierra batida y uno de los mejores de todos los tiempos. El tenista masculino más joven de la historia en conseguir el Golden Slam en la carrera y uno de los dos tenistas masculinos, junto a serbio Novak Djokovic, en toda la Era Abierta en conseguir el Doble Grand Slam en la carrera. El tenista español con el mayor número de títulos individuales, más títulos de Grand Slam, más títulos de Masters 1000 y con más semanas en el número 1 del ranking mundial de la ATP y el único tenista en la historia del tenis en ser número 1 en tres décadas diferentes: 2000s, 2010s y 2020s',
      imagen: '../../../assets/rn.jpg'
    },
    {
      nombre: 'Novak Djokovic',
      deporte: 'Tenista',
      descripcion: 'Tenista serbio que alcanzó el número 1 del mundo individual masculino por la Asociación de Tenistas Profesionales (ATP). Campeón de Grand Slam en individuales y medallista olímpico. Es el primer jugador en ganar los nueve torneos ATP Tour Masters 1000 y el primer serbio en ocupar el puesto número 1 de la ATP. Con su victoria en Wimbledon en 2018, se convirtió en el primer jugador en ganar los cuatro Grand Slams en tres superficies diferentes (dura, arcilla y hierba). Djokovic está considerado uno de los mejores tenistas de todos los tiempos.',
      imagen: '../../../assets/nd.jpg'
    },
  ];
}
