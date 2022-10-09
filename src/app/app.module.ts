import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material UI imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

// Parent Component
import { ParentTreasureChestComponent } from './feature-components/parent_treasure_chest/parent-treasure-chest.component';

// Feature Components
import { HeaderInfoComponent } from './feature-components/header-info/header-info.component';
import { NewExpensesComponent } from './feature-components/new-expenses/new-expenses.component';
import { AmountDetailsComponent } from './feature-components/amount-details/amount-details.component';
import { PastAmountDetailsComponent } from './feature-components/past-amount-details/past-amount-details.component';
import { NewIncomeComponent } from './feature-components/new-income/new-income.component';
import { LoginComponent } from './feature-components/login/login.component';
import { RegisterComponent } from './feature-components/register/register.component';

// Structural Components
import { QuotationsComponent } from './structural-components/quotations/quotations.component';
import { SaveButtonComponent } from './structural-components/save-button/save-button.component';
import { InitialAmountDetailDialogComponent } from './feature-components/initial-amount-detail-dialog/initial-amount-detail-dialog.component';
import { YearDropdownComponent } from './structural-components/year-dropdown/year-dropdown.component';
import { MonthDropdownComponent } from './structural-components/month-dropdown/month-dropdown.component';
import { DayDropdownComponent } from './structural-components/day-dropdown/day-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderInfoComponent,
    NewExpensesComponent,
    AmountDetailsComponent,
    PastAmountDetailsComponent,
    QuotationsComponent,
    SaveButtonComponent,
    NewIncomeComponent,
    LoginComponent,
    RegisterComponent,
    ParentTreasureChestComponent,
    InitialAmountDetailDialogComponent,
    YearDropdownComponent,
    MonthDropdownComponent,
    DayDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatDividerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRippleModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
