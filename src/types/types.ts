export type TypeSkillData = {
  skill_name: string;
  skill_competence_name: string;
  skill_domain_name: string;
  skill_hard_soft_type: string;
  skill_estimation: number;
  skill_accordance: boolean;
  skill_key: boolean;
  skill_education_request: boolean;
  skill_education_in_progress: boolean;
};

export type TypeSkillEmployee = {
  employee_id: 2;
  employee_name_surname: "Муравьев Али";
  employee_position_name: "Бизнес Аналитик";
  employee_team_name: "Приложение";
  employee_grade_name: "Senior";
  employee_bus_factor: true;
  employee_key: true;
  skills: Array<TypeSkillData>;
};
