export interface BiomeModel {
  id: string;
  name: string;
  difficulty: BiomeDifficultySpecific[];
  image: string;
}

export interface BiomeDifficultySpecific {
  scrollCount: number;
  dualScrolls: number;
  cursedChestChance: number;
  fragment: number;
}
