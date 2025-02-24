import { Component, signal } from '@angular/core';
import {
  MatChipSelectionChange,
  MatChipsModule,
} from '@angular/material/chips';

interface Chip {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-root',
  imports: [MatChipsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chip-drag';
  chip_list = signal<Chip[]>([
    { name: 'Chip 1', selected: true },
    { name: 'Chip 2', selected: true },
    { name: 'Chip 3', selected: true },
    { name: 'Chip 4', selected: true },
    { name: 'Chip 5', selected: true },
  ]);

  moveChips(): void {
    // randomize the order of the chips
    this.chip_list.update((chip_list) => {
      return chip_list.sort(() => Math.random() - 0.5);
    });
  }

  chipSelection(event: MatChipSelectionChange, index: number): void {
    if (event.isUserInput) {
      this.chip_list.update((chip_list) => {
        chip_list[index].selected = event.selected;
        return [...chip_list];
      });
    }
  }
}
