import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from '../app/my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from '../app/my-doughnut-chart/my-doughnut-chart.component';
import { MyRadarChartComponent } from '../app/my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from '../app/my-pie-chart/my-pie-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent},
  {path: '**', component: MyBarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
