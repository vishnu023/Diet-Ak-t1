export interface MemberData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  ageGroup: string;
  occupation: string;
  healthGoal: string;
  wearablesOwned: string[];
  betaTester: boolean;
  corporateWellness: boolean;
  professionalRole: boolean;
}

export interface StatItem {
  percentage: number;
  label: string;
  sub: string;
  source: string;
  risk: "Critical" | "Severe" | "High";
}

export interface EcosystemNode {
  id: string;
  label: string;
  angle: number;
  distance: number;
  icon: string; // lucide icon name
  description: string;
  type: "telemetry" | "science" | "validation";
}
