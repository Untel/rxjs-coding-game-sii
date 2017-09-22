import { AI } from "../shared/ai";
import { CharacterAction, Game } from "../shared/game";

export default class YoloAI extends AI {

  firstAction (game: Game): void {
    this.manager.performAction(CharacterAction.SHIELD);
  }

  ai (game: Game): void {
    if ( game.foe.isBehindShield ) {
      this.manager.performAction(CharacterAction.THRUST);
    } else if ( game.me.armor === 0) {
      this.manager.performAction(CharacterAction.SHIELD);
    } else {
      this.manager.performAction(CharacterAction.HIT);
    }
    
  }
}
