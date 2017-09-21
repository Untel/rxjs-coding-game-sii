import { AI } from "../shared/ai";
import { CharacterAction, Game } from "../shared/game";

export default class OnlyShieldAI extends AI {

  firstAction (game: Game): void {
    this.manager.performAction(CharacterAction.SHIELD);
  }

  ai (game: Game): void {
  }
}


