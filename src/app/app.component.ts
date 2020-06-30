import { Component } from '@angular/core';
import { HolidayService } from './services/holiday.service';
import { Holiday } from './interfaces/holiday';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hong Kong General Holidays for 2021';
  holidays: Holiday[];

  constructor(private holidayService: HolidayService) {
    this.holidays = this.getHolidays()
  }

  getHolidays(): Holiday[] {
    return this.holidayService.getHolidays();
  }
}
