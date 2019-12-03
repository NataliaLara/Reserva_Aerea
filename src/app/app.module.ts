import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EnderecoListComponent } from './endereco/endereco-list/endereco-list.component';
import { EnderecoCreateComponent } from './endereco/endereco-create/endereco-create.component';
import { EnderecoDetailComponent } from './endereco/endereco-detail/endereco-detail.component';
import { EnderecoEditComponent } from './endereco/endereco-edit/endereco-edit.component';

import { InicioComponent } from './inicio/inicio.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import { CasaListComponent } from './casa/casa-list/casa-list.component';
import { CasaCreateComponent } from './casa/casa-create/casa-create.component';
import { CasaDetailComponent } from './casa/casa-detail/casa-detail.component';
import { CasaEditComponent } from './casa/casa-edit/casa-edit.component';

import { VooListComponent } from './voo/voo-list/voo-list.component';
import { VooCreateComponent } from './voo/voo-create/voo-create.component';
import { VooDetailComponent } from './voo/voo-detail/voo-detail.component';
import { VooEditComponent } from './voo/voo-edit/voo-edit.component';

import { ReservaListComponent } from './reserva/reserva-list/reserva-list.component';
import { ReservaCreateComponent } from './reserva/reserva-create/reserva-create.component';
import { ReservaDetailComponent } from './reserva/reserva-detail/reserva-detail.component';
import { ReservaEditComponent } from './reserva/reserva-edit/reserva-edit.component';

import { PassagemAereaListComponent } from './passagemaerea/passagemaerea-list/passagemaerea-list.component';
import { PassagemAereaCreateComponent } from './passagemaerea/passagemaerea-create/passagemaerea-create.component';
import { PassagemAereaDetailComponent } from './passagemaerea/passagemaerea-detail/passagemaerea-detail.component';
import { PassagemAereaEditComponent } from './passagemaerea/passagemaerea-edit/passagemaerea-edit.component';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  //novos
  MatToolbarModule,  
  MatSidenavModule, 
  MatGridListModule,  
  MatMenuModule} from "@angular/material";

import {MatRadioModule} from '@angular/material/radio';  
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion'; 
import {MatDatepickerModule } from '@angular/material/datepicker';
import{MatNativeDateModule } from '@angular/material';
import {CalendarModule} from 'primeng/calendar';


const appRoutes: Routes = [

  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { path: 'inicio',
    component: InicioComponent,
    data: { title: 'Inicio' }
  },
  {
    path: 'enderecos',
    component: EnderecoListComponent,
    data: { title: 'Endereco List' }
  },
  {
    path: 'inicio',
    component: InicioComponent,
    data: { title: 'Inicio' }
  },
  {
    path: 'endereco-create',
    component: EnderecoCreateComponent,
    data: { title: 'Create Endereco' }
  },
  {
    path: 'endereco-edit/:id',
    component: EnderecoEditComponent,
    data: { title: 'Edit Endereco' }
  },
  {
    path: 'endereco-details/:id',
    component: EnderecoDetailComponent,
    data: { title: 'Endereco Details' }
  },
  {
    path: 'casa-create',
    component: CasaCreateComponent,
    data: { title: 'Create Casa' }
  },
  {
    path: 'casas',
    component: CasaListComponent,
    data: { title: 'Casa List' }
  },
  {
    path: 'casa-details/:id',
    component: CasaDetailComponent,
    data: { title: 'Casa Details' }
  },
  {    
    path: 'casa-edit/:id',
    component: CasaEditComponent,
    data: { title: 'Edit Casa'  }
  },
  {
    path: 'voo-create',
    component: VooCreateComponent,
    data: { title: 'Create Voo' }
  },
  {
    path: 'voos',
    component: VooListComponent,
    data: { title: 'Voo List' }
  },
  {
    path: 'voo-details/:id',
    component: VooDetailComponent,
    data: { title: 'Voo Details' }
  },
  {    
    path: 'voo-edit/:id',
    component: VooEditComponent,
    data: { title: 'Edit Voo'  }
  },
  {
    path: 'reserva-create',
    component: ReservaCreateComponent,
    data: { title: 'Create Reserva' }
  },
  {
    path: 'reservas',
    component: ReservaListComponent,
    data: { title: 'Reserva List' }
  },
  {
    path: 'reserva-details/:id',
    component: ReservaDetailComponent,
    data: { title: 'Reserva Details' }
  },
  {    
    path: 'reserva-edit/:id',
    component: ReservaEditComponent,
    data: { title: 'Edit Reserva'  }
  },
  {
    path: 'passagemaerea-create',
    component: PassagemAereaCreateComponent,
    data: { title: 'Create Passagem Aerea' }
  },
  {
    path: 'passagensaereas',
    component: PassagemAereaListComponent,
    data: { title: 'Passagem Aerea List' }
  },
  {
    path: 'passagemaerea-details/:id',
    component: PassagemAereaDetailComponent,
    data: { title: 'Passagem Aerea Details' }
  },
  {    
    path: 'passagemaerea-edit/:id',
    component: PassagemAereaEditComponent,
    data: { title: 'Edit Passagem Aerea'  }
  }

];

@NgModule({
  declarations: [
    AppComponent,
    EnderecoListComponent,
    InicioComponent,
    DashboardComponent,
    EnderecoCreateComponent,
    EnderecoDetailComponent,
    EnderecoEditComponent,
    CasaListComponent,
    CasaCreateComponent,
    CasaDetailComponent,
    CasaEditComponent,
    VooListComponent,
    VooCreateComponent,
    VooDetailComponent,
    VooEditComponent,
    ReservaListComponent,
    ReservaCreateComponent,
    ReservaDetailComponent,
    ReservaEditComponent,
    PassagemAereaListComponent,
    PassagemAereaCreateComponent,
    PassagemAereaDetailComponent,
    PassagemAereaEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    ListboxModule,
    DropdownModule,
    //novos
    MatToolbarModule,  
    MatSidenavModule, 
    MatGridListModule,  
    MatMenuModule,
    ButtonModule,
    AccordionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule
  ],
  providers: [
    MatDatepickerModule, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
