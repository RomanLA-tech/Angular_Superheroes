import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BattleService } from '@services/battle.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Battle } from '@interfaces/battle.interface';

@Component({
  selector: 'app-history-tab',
  templateUrl: './history-tab.component.html',
  styleUrls: ['./history-tab.component.scss']
})
export class HistoryTabComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) public sort: MatSort;

  public displayedColumns: ReadonlyArray<string> = ['date', 'hero', 'opponent', 'result'];
  public dataSource: MatTableDataSource<Battle>;
  private battleHistory: ReadonlyArray<Battle>;

  constructor(
    private readonly battleService: BattleService,
    private readonly liveAnnouncer: LiveAnnouncer) {
  }

  public ngOnInit(): void {
    this.dataSourceInit();
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public announceSortChange(sortState: Sort): void {
    (sortState.direction)
      ? this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`)
      : this.liveAnnouncer.announce('Sorting cleared');
  }

  private dataSourceInit(): void {
    this.battleHistory = this.battleService.battles;
    this.dataSource = new MatTableDataSource([...this.battleHistory]);
  }

}


