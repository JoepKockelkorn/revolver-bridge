import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'revolver-bridge-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent {}
