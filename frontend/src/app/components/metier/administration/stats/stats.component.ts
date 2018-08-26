import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

	BarChart :any;
	DoughnutChart :any;

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
				legend: { position: 'bottom' },
				gridLines: {offsetGridLines : true}
			}
		});

		this.BarChart = new Chart('barChart', {
			type: 'bar',
			data: {
				labels: ["Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre"],
				datasets: [{
					label: 'Membres',
					data: [10, 6, 3, 5, 7, 16, 14, 8, 7, 10, 12, 17],
					backgroundColor: [
						'#23fea4',
						'#23fea4',
						'#23fea4',
						'#23fea4',
						'#23fea4',
						'#23fea4'
					],
					borderColor: [
						'#23fea4',
						'#23fea4',
						'#23fea4',
						'#23fea4',
						'#23fea4',
						'#23fea4'
					],
					borderWidth: 1
				},
				{
					label: 'Posts',
					data: [6, 12, 7, 8, 11, 14, 22, 18, 14, 4, 7, 10],
					backgroundColor: [
						'#2cc185',
						'#2cc185',
						'#2cc185',
						'#2cc185',
						'#2cc185',
						'#2cc185'
					],
					borderColor: [
						'#2cc185',
						'#2cc185',
						'#2cc185',
						'#2cc185',
						'#2cc185',
						'#2cc185'
					],
					borderWidth: 1
				},
				{
					label: 'Commentaires',
					data: [1, 13, 3, 5, 7, 16, 6, 9, 16, 11, 8, 14],
					backgroundColor: [
						'#1d9061',
						'#1d9061',
						'#1d9061',
						'#1d9061',
						'#1d9061',
						'#1d9061'
					],
					borderColor: [
						'#1d9061',
						'#1d9061',
						'#1d9061',
						'#1d9061',
						'#1d9061',
						'#1d9061'
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