import { Injectable } from '@angular/core';
import { Holiday } from '../interfaces/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  holidays: Holiday[] = [
    { holiday: '一月一日', date: new Date(2021, 0, 1) },
    { holiday: '農曆年初一', date: new Date(2021, 1, 12) },
    { holiday: '農曆年初二', date: new Date(2021, 1, 13) },
    { holiday: '農曆年初四', date: new Date(2021, 1, 15) },
    { holiday: '耶穌受難節', date: new Date(2021, 3, 2) },
    { holiday: '耶穌受難節翌日', date: new Date(2021, 3, 3) },
    { holiday: '清明節翌日', date: new Date(2021, 3, 5) },
    { holiday: '復活節星期一翌日', date: new Date(2021, 3, 6) },
    { holiday: '勞動節', date: new Date(2021, 4, 1) },
    { holiday: '佛誕', date: new Date(2021, 4, 19) },
    { holiday: '端午節', date: new Date(2021, 5, 14) },
    { holiday: '香港特別行政區成立紀念日', date: new Date(2021, 6, 1) },
    { holiday: '中秋節翌日', date: new Date(2021, 8, 22) },
    { holiday: '國慶日', date: new Date(2021, 9, 1) },
    { holiday: '重陽節', date: new Date(2021, 9, 14) },
    { holiday: '聖誕節', date: new Date(2021, 11, 25) },
    { holiday: '聖誕節後第一個周日', date: new Date(2021, 11, 27) }
  ];

  constructor() { }

  getHolidays(): Holiday[] {
    return this.holidays;
  }
}
