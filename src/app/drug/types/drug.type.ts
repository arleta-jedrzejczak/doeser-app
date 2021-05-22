export type DrugType = {
  id: string;
  prescriptionCode?: string;
  pack: DrugPackType;
  dosage: DrugDosageType;
};

export type DrugPackType = {
  activeAmmount: string;
  activeUnitType: ActiveUnitType;
  drugName: string;
  producer?: string;
};

export type DrugDosageType = {
  doseAmountUnit: DrugDoseUnitType;
  doseAmount: number;
  howOften: string;
  howManyHours?: string;
};

export type DrugDoseUnitType = 'pill' | 'ml';

export type ActiveUnitType = 'g' | 'ml' | 'mg';
