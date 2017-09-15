import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DeptDropDownService} from './dept-service';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { SearchPipe } from './search-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [DeptDropDownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
