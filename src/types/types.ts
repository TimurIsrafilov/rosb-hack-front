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

export type TypeEmployee = {
  employee_id: number;
  employee_name_surname: string;
  employee_position_name: string;
  employee_team_name: string;
  employee_grade_name: string;
  employee_bus_factor: boolean;
  employee_key: boolean;
  skills: Array<TypeSkillData>;
};

export type TypeEmployees = {
  employees: Array<TypeEmployee>;
};

export type TypeFilterValue = {
  type: string;
  options: Array<string>;
};

export type TypeFilterValues = Array<TypeFilterValue>;
