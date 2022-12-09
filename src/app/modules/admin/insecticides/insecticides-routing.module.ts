import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateInsecticidesComponent } from './views/create-insecticides/create-insecticides.component'
import { TableInsecticidesComponent } from './views/table-insecticides/table-insecticides.component'
import { InsecticidesIndexComponent } from './components/insecticides-index/insecticides-index.component'
import { DetailsInsecticidesComponent } from './views/details-insecticides/details-insecticides.component'

const routes: Routes = [
  {
    path: '',
    component: InsecticidesIndexComponent,
    children: [
      { path: '', component: TableInsecticidesComponent },
      { path: 'edit-insecticides/:id', component: CreateInsecticidesComponent },
      { path: 'create-insecticides', component: CreateInsecticidesComponent },
      { path: 'DetailsInsecticides/:id',component: DetailsInsecticidesComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsecticidesRoutingModule {}
