export interface BiomeModel {
  id: string;
  name: string;
  difficulty: BiomeDifficultySpecific[];
}

export interface BiomeDifficultySpecific {
  scrollCount: number;
  dualScrolls: number;
  cursedChestChance: number;
  fragment: number;
}
