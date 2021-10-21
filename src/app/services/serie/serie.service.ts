import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Serie} from "../../models/serie.model";
import {CommentModel} from "../../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class SerieService {

	series: BehaviorSubject<Array<Serie>>;
	comment: CommentModel;


  constructor() {
	  const initSeries = [
		  new Serie('Kaamelott', new Date('2005-03-11'), 6,  458,'Le quotidien banal et burlesque du roi Arthur et des chevaliers de la Table ronde : quête du Graal, repas en famille et stratégie militaire. ','Deuxième moitié du Ve siècle, île de Bretagne. Alors que l’Empire romain s’effondre et que le christianisme s’impose peu à peu face aux dieux païens, le royaume de Logres s’organise autour de son souverain, le roi Arthur, qui règne depuis le château de Kaamelott ; entouré de ses fidèles chevaliers, il s’attelle à la mission que les dieux lui ont confiée : rechercher le Saint Graal.\n' +
			  '\n' +
			  'Mais cette quête s’annonce plus que difficile, car Arthur est très mal entouré. Ses chevaliers de la Table ronde sont un faible renfort contre les défis qui se dressent sur la route : peureux, naïfs, stupides ou au contraire violents, archaïques et désordonnés, les troupes de Bretagne ne comprennent pas l’enjeu de la quête du Graal et peinent à se rendre utiles. L’entourage familial du roi n’est guère plus sensé : son quotidien déjà bien chargé est parsemé de conflits avec sa femme Guenièvre ou sa belle-famille. Pour couronner le tout, le pays est régulièrement la cible d’incursions barbares.\n' +
			  '\n' +
			  'Les premiers jours de paix après la construction de Kaamelott et les débuts de la Quête du Graal cèdent vite la place à un quotidien plus difficile et morose pour le roi, qui doit maîtriser à la fois son caractère dépressif et les incessantes bourdes de son entourage tout en essayant de gouverner son royaume à sa manière, moderne et progressiste. Un combat de tous les jours où le roi légendaire va connaître bien des déboires.  ', 'Ben dis donc Kaamelott ça porte bien son nom ! Mais siiiii ! Pour dire que c\'est d\'la camelote !', 'https://bit.ly/3BYllR3'),
		  new Serie('The Shield', new Date('2002-03-12'), 7,  88,'Pour rétablir l\'ordre dans les secteurs les plus dangereux de Los Angeles, une brigade de police en arrive à mettre en oeuvre des méthodes plutôt expéditives et inhabituelles. ','Vic Mackey, Inspecteur de Police de Los Angeles dans le quartier fictif et malfamé de Farmington, est aussi le chef de la « Brigade de choc » (« Strike Team »), inspirée d\'une véritable brigade antigang du LAPD. Ses méthodes pour combattre le crime, peu conventionnelles (brutalité, corruption et meurtre) mais très efficaces, flirtent souvent avec celles utilisées par les criminels qu\'ils poursuivent lui et son équipe. Par son comportement dépassant le cadre légal, il se retrouve fréquemment dans des situations difficiles à la fois vis-à-vis de ses supérieurs successifs (qui le soupçonnent – souvent – d\'utiliser, dans son unique intérêt, les informations fournies par ses contacts dans la rue), des membres des gangs qu\'il combat (ou qu\'il aide parfois), des autres membres de la Brigade de choc (qu\'il entraîne fréquemment dans ses combines), de ses autres collègues (qui désapprouvent ses méthodes) et même de sa femme (qui entretient des relations de plus en plus conflictuelles avec lui).\n' +
			  '\n' +
			  'Si Vic est le personnage principal avec sa Strike Team, la série se concentre également sur le quotidien des autres membres du « bercail » (surnom dans la traduction française5 de leur poste de police dans une ancienne église), notamment de son capitaine, David Aceveda, ambitieux politicien dont l\'intégrité va être mise à l\'épreuve à plusieurs reprises, ou de Julien Lowe, jeune policier honnête partagé entre son homosexualité refoulée et sa foi dans les enseignements de la Bible. ' , 'The Shield est inspiré du scandale Rampart qui a touché l\'unité antigang CRASH de la police de Los Angeles.\n' +
			  '\n' +
			  'En dépit de son manque de considération auprès du grand public, elle est considérée par de nombreux spécialistes comme l\'une des plus grandes séries de tous les temps.', 'https://bit.ly/3G4gL6n'),

		  new Serie('Hunter X Hunter', new Date('1999-10-16'), 1,  148, 'Gon Freeks est un jeune garçon provenant d\'un petit village aimé des animaux. Il rêve de devenir Hunter afin de retrouver son père, le plus grand Hunter de tous, qu\'il n\'a jamais vu qu\'en photo.','Gon Freecss a douze ans, et rêve de devenir hunter (chasseur en anglais). Les hunters sont des citoyens d\'élite autorisés à faire quasiment tout ce qu\'ils souhaitent sur simple présentation de leur carte de membre : ils peuvent ainsi acquérir gratuitement tout objet à la vente sur les fonds de l\'association ; réquisitionner tout véhicule, logement et outil pour leur travail ; et sont de facto habilités à exercer tous les métiers du monde, pouvant tout aussi bien devenir chasseurs de prime, chefs-cuisinier, archéologues, zoologues, justiciers ou consultants dans divers domaines. Son père, Ging Freecss, qu\'il ne connaît pas directement, est considéré comme un des plus grands hunters de son temps. C\'est aussi pour le retrouver que Gon veut devenir hunter.\n' +
			  '\n' +
			  'Cependant l\'examen de hunter, qui a lieu chaque année, est extrêmement difficile et périlleux. On dit qu\'un candidat sur 10 000 arrive sur le lieu des épreuves et qu\'un seul candidat tous les trois ans devient hunter à sa première tentative. Durant les épreuves, il n\'est pas rare d\'être blessé, voire tué par des monstres, des pièges ou même d\'autres concurrents…\n' +
			  '\n' +
			  'Au cours de cet examen, Gon va rencontrer différents personnages, aussi bien amis qu\'ennemis : Kurapika, dont le seul objectif est de venger son clan, le clan Kuruta, assassiné par la Brigade fantôme et tenter de récupérer les yeux de son clan, les pupilles écarlates ; Léolio, dont le but avoué est d\'acquérir de l\'argent pour financer ses études de médecine ; Kirua, qui a le même âge que Gon, fils d\'une famille d\'assassin d\'élite, la famille Zoldik, ne souhaitant pas poursuivre la voie de sa famille, qui participe à cet examen par simple amour du défi ; Hisoka, dont la grande passion est le combat contre des guerriers très puissants ; ainsi que beaucoup d\'autres…\n' +
			  '\n' +
			  'La force de Gon n\'est pas que physique : son charisme, sa pureté, sa gentillesse, sa grande générosité et surtout son incroyable capacité à attirer la sympathie l\'aident souvent à se sortir des situations les plus périlleuses. ', 'En juin 2007, les vingt premiers tomes du manga sont vendus à 36 958 000 exemplaires au Japon85 alors qu\'en août 2011, les ventes totales du manga se sont élevées à 55 000 000 exemplaires86. En juillet 2012, le tirage total des tomes s\'élève à 60 millions d\'exemplaires87. En mai 2013, les ventes dépassent les 65 millions d\'exemplaires88. En novembre 2019, le tirage total des tomes s\'élève à 78 millions d\'exemplaires en circulation89. ', 'https://bit.ly/3aV9mrG')
	  ];

	  this.comment = new CommentModel( 'Dounia Manhouli', 'Kaamelott, c\'est la vie !');
	  initSeries[0].comments.push(this.comment);
	  this.comment = new CommentModel( 'Guethenoc', 'REVOOOOLTE');
	  initSeries[0].comments.push(this.comment);
	  this.comment = new CommentModel( 'Shane Vandrell', 'Quoi qu\'est-ce qu\'il y a vous voulez mon sang ? ba allez-y faites péter les seringues !');
	  initSeries[1].comments.push(this.comment);
	  this.comment = new CommentModel( 'Kirua Zoldig', 'Si tu veux apprendre à connaîtrequelqu’un, trouve d’abord ce qui les mets en colère. ');
	  initSeries[2].comments.push(this.comment);
	  this.comment = new CommentModel( 'Hisoka', 'Je continuerai de vous garder en vie jusqu\'à ca que vous valiez la peine d\'être tués.');
	  initSeries[2].comments.push(this.comment);

	  this.series = new BehaviorSubject<Array<Serie>>(initSeries);
  }

  getSerieById(serieId: number): Promise<Serie>{
	  return new Promise<Serie>(
		  (res, rej) => {
			  const series = this.series.getValue();

			  for (let serie of series){
				  if (serie.id === serieId){
					  res(serie);
					  break;
				  }
			  }
		  }
	  );
  }



	save(serieToAdd: Serie): Promise<void>{
	  return new Promise<void>(
		  (res, rej) => {
			  setTimeout(() => {
				  const series = this.series.getValue();
				  series.push(serieToAdd);
				  this.series.next(series);
				  res();
			  }, 500);
		  }
	  );
  }

	update(editedSerie: Serie): Promise<void>{

	  return new Promise<void>(
		  (res, rej) => {
			  setTimeout(() =>{
				  const series = this.series.getValue();

				  for (let [index, serie] of series.entries()){
					  if(serie.id === editedSerie.id){
						  series[index] = editedSerie;
						  this.series.next(series);
						  res();
						  break;
					  }
				  }
			  }, 500);
		  }
	  );
  }

  deleteSerie(serieIdToDelete: number){
	  const series = this.series.getValue();

	  for (let [index, serie] of series.entries()){
		  if(serie.id === serieIdToDelete){
			  series.splice(index, 1);
			  this.series.next(series);
			  break;
		  }
	  }
  }

}
