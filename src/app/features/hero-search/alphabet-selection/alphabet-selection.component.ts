import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ALPHABET_ARR } from '@utils/constants';

@Component({
  selector: 'app-alphabet-selection',
  templateUrl: './alphabet-selection.component.html',
  styleUrls: ['./alphabet-selection.component.scss']
})
export class AlphabetSelectionComponent implements OnInit {

  @Output() letterSelected: EventEmitter<string> = new EventEmitter<string>();

  public selectedLetter: Readonly<string>;
  public showLetters: Readonly<boolean>;
  public readonly alphabet: ReadonlyArray<string> = ALPHABET_ARR;

  public ngOnInit(): void {
    this.selectedLetter = 'A';
    this.showLetters = false;
  }

  public selectLetter(letter: Readonly<string>): void {
    this.selectedLetter = letter;
    this.toggleLetters();
    this.letterSelected.emit(this.selectedLetter);
  }

  public toggleLetters(): void {
    this.showLetters = !this.showLetters;
  }
}
