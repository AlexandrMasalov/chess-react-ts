import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';


export class King extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING
  }

  canMove(target: Cell) : boolean {
    if (!super.canMove(target)) {
      return false;
    }
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;

    if (target.y === this.cell.y + direction && target.x === this.cell.x && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }
    return false;
  }
  
}
