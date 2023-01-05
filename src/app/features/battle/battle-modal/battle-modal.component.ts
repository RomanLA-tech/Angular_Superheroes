import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BattleModalData } from '@features/battle/battle-modal/battle.modal.interface';

@Component({
  selector: 'app-battle-modal',
  templateUrl: './battle-modal.component.html',
  styleUrls: ['./battle-modal.component.scss']
})
export class BattleModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: BattleModalData,
    public readonly dialogRef: MatDialogRef<BattleModalComponent>
  ) {
  }

  public onCloseClick(): void {
    this.dialogRef.close();
  }
}
