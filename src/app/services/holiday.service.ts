import { Injectable } from '@angular/core';
import { Holiday } from '../interfaces/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  holidays: Holiday[] = [
    { holiday: 'The first day of January', date: new Date(2020, 0, 1) },
    { holiday: 'Lunar New Year\'s Day', date: new Date(2020, 0, 25) },
    { holiday: 'The third day of Lunar New Year', date: new Date(2020, 0, 27) },
    { holiday: 'The fourth day of Lunar New Year', date: new Date(2020, 0, 28) },
    { holiday: 'Ching Ming Festival', date: new Date(2020, 3, 4) },
    { holiday: 'Good Friday', date: new Date(2020, 3, 10) },
    { holiday: 'The day following Good Friday', date: new Date(2020, 3, 11) },
    { holiday: 'Easter Monday', date: new Date(2020, 3, 13) },
    { holiday: 'Birthday of the Buddha', date: new Date(2020, 3, 30) },
    { holiday: 'Labour Day', date: new Date(2020, 4, 1) },
    { holiday: 'Tuen Ng Festival', date: new Date(2020, 5, 25) },
    { holiday: 'Hong Kong Special Administrative Region Establishment Day', date: new Date(2020, 6, 1) },
    { holiday: 'National Day', date: new Date(2020, 9, 1) },
    { holiday: 'The day following the Chinese Mid-Autumn Festival', date: new Date(2020, 9, 2) },
    { holiday: 'The day following Chung Yeung Festival', date: new Date(2020, 9, 26) },
    { holiday: 'Christmas Day', date: new Date(2020, 11, 25) },
    { holiday: 'The first weekday after Christmas Day', date: new Date(2020, 11, 26) }
  ];

  constructor() { }

  getHolidays(): Holiday[] {
    return this.holidays;
  }
}
