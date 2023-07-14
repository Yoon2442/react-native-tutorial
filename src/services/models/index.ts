export interface ICardItem {
  difficulty: string;
  description: string;
  language: string;
  star: number;
  fork: number;
  gameData: GameData;
}

export interface GameData {
  mission: string[];
}
