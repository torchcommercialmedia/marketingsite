import { IconType } from "react-icons";

export type PricingStore = {
  bears: any;
  isChecked: boolean;
  setIsChecked: (checked: boolean) => void;
  annualSavingsEnabled: boolean;
  setAnnualSavingsEnabled: (enabled: boolean) => void;
  showAdditionalFeatures: boolean;
  setShowAdditionalFeatures: (show: boolean) => void;
  addOns: Tier[];
  setAddOns: (addOns: Tier[]) => void;
  toggleAddOn: (tierIdx: number, addOnIdx: number) => void;
};

export type AddOn = {
  name: string;
  isChecked: boolean;
  tooltip: { icon: IconType; name: string }[];
};

export type Tier = {
  name: string;
  id: string;
  href: string;
  priceMonthly: number;
  description: string;
  initialFeatures: string[];
  additionalFeatures?: string[];
  mostPopular: boolean;
  addOnsFeature: AddOn[];
};
