import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, takeUntil, timer } from 'rxjs';

import { BattleModalComponent } from '@features/battle/battle-modal/battle-modal.component';
import { UserService } from '@services/user.service';
import { PowerUpService } from '@services/power-up.service';
import { BattleService } from '@services/battle.service';
import { HeroService } from '@services/hero.service';
import { Hero } from '@interfaces/hero.interface';
import { PowerUp } from '@interfaces/power-up.interface';
import { BattleProps } from '@interfaces/battle.interface';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit, OnDestroy {

  public activeUserPowerUp$: Observable<Readonly<PowerUp>> = this.powerUpService.activePowerUp$;
  public userSelectedHero$: Observable<Readonly<Hero>> = this.userService.userSelectedHero$;
  public opponentHero: Readonly<Hero>;
  public opponentPowerUp: Readonly<PowerUp>;
  public userHero: Readonly<Hero>;
  public userPowerUp: Readonly<PowerUp>;
  public userHeroWithPowerUp: Readonly<Hero>;
  public loading = false;
  public resultMessage = '';
  private destroy$ = new Subject<void>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly userService: UserService,
    private readonly powerUpService: PowerUpService,
    private readonly heroService: HeroService,
    private readonly battleService: BattleService
  ) {
  }

  public ngOnInit(): void {
    this.initOpponentHero();
    this.initUserHeroWithPowerUp();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public startBattle(): void {
    this.loading = true;
    const heroes: BattleProps = {
      userHero: this.userHeroWithPowerUp,
      opponentHero: this.opponentHero
    };
    timer(5000).subscribe(() => {
      this.loading = false;
      this.resultMessage = this.battleService.startNewBattle(heroes);
      this.openDialog();
    });
  }

  public initOpponentHero(): void {
    this.opponentHero = this.userService.getRandomHero();
    this.opponentPowerUp = this.powerUpService.getRandomPowerUp();
    this.opponentHero = this.battleService.getHeroWithPowerUp(this.opponentHero, this.opponentPowerUp);
  }

  private initUserHeroWithPowerUp(): void {
    this.userSelectedHero$.pipe(takeUntil(this.destroy$)).subscribe(value => this.userHero = value);
    this.activeUserPowerUp$.pipe(takeUntil(this.destroy$)).subscribe(value => this.userPowerUp = value);
    this.userHeroWithPowerUp = this.battleService.getHeroWithPowerUp(this.userHero, this.userPowerUp);
  }

  private openDialog(): void {
    this.dialog.open(BattleModalComponent, {
      height: '420px',
      width: '600px',
      data: {resultMessage: this.resultMessage, userHero: this.userHero}
    });
  }
}
