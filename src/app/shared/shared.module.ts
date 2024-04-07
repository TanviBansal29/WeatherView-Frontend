import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { TemperatureConverterPipe } from './pipes/temperature.pipe';

@NgModule({
  declarations: [NavbarComponent, TemperatureConverterPipe],
  imports: [
    CommonModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    DialogModule,
    ToastModule,
    FormsModule,
    ProgressSpinnerModule,
    TableModule,
  ],
  exports: [
    NavbarComponent,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    DialogModule,
    ToastModule,
    FormsModule,
    ProgressSpinnerModule,
    TableModule,
    TemperatureConverterPipe,
  ],
})
export class SharedModule {}
