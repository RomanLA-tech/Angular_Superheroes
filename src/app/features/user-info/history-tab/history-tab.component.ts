import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BattleService } from '@services/battle.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { BATTLES_MOCK } from '@utils/constants';

@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.component.html',
  styleUrls: ['./history-tab.component.scss']
})
export class HistoryTabComponent implements AfterViewInit {

  public displayedColumns: ReadonlyArray<string> = ['date', 'hero', 'opponent', 'result'];
  public dataSource = new MatTableDataSource(BATTLES_MOCK);

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private readonly battleService: BattleService,
    private readonly liveAnnouncer: LiveAnnouncer) {
  }

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }
}

