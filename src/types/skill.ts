export type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

export type SkillCategory = {
  category: string;
  items: SkillItem[];
};
