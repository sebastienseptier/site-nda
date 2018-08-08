import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

	private BarChart :any;
	private DoughnutChart :any;

  	constructor() { }

  	ngOnInit() {
    	//Graphiques en camembert et en barres permettant de tester Chart.js
		this.DoughnutChart = new Chart('doughnutChart', {
			type: 'doughnut',
			data: {
				labels: ["Lille", "Valenciennes", "Paris", "St-Amand-les-Eaux", "Douais"],
				datasets: [{
					label: 'Membres',
					data: [42, 35, 53, 30, 5],
					backgroundColor: [
						'rgba(204, 90, 70, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(14, 90, 170, 1)'
					],
				}],
			},
			options: {
				title: {
					text: "Doughnut chart",
					display: false
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				responsive: false,
				legend: { position: 'bottom' }
			}
		});

		this.BarChart = new Chart('barChart', {
			type: 'bar',
			data: {
				labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
				datasets: [{
					label: 'Membres',
					data: [1, 3, 3, 5, 7, 21, 25, 56, 73, 102, 120, 165],
					backgroundColor: [
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)'
					],
					borderColor: [
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)',
						'rgba(204, 90, 70, 1)'
					],
					borderWidth: 1
				},
				{
					label: 'Posts',
					data: [6, 6, 7, 8, 14, 14, 18, 18, 20, 23, 27, 41],
					backgroundColor: [
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)'
					],
					borderColor: [
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)',
						'rgba(55, 162, 235, 1)'
					],
					borderWidth: 1
				},
				{
					label: 'Commentaires',
					data: [1, 3, 3, 5, 7, 21, 36, 39, 40, 61, 78, 92],
					backgroundColor: [
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)'
					],
					borderColor: [
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(255, 206, 86, 1)'
					],
					borderWidth: 1
				},
				{
					label: 'J\'aimes',
					data: [1, 3, 3, 5, 7, 21, 26, 28, 45, 45, 68, 107],
					backgroundColor: [
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)'
					],
					borderColor: [
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)',
						'rgba(86, 180, 78, 1)'
					],
					borderWidth: 1
				}
			]},
			options: {
				title: {
					text: "Bar chart",
					display: false
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				responsive: false,
				legend: { position: 'bottom' }
			}
		});
  	}
}