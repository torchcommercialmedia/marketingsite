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

export type ResponseData = {
  data: Data[];
  meta: {
    pagination?: Pagination;
  };
};

export type Data = {
  attributes: Attributes;
  id: number;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type BuiltInDates = {
  createdAt?: Date;
  publishedAd?: Date;
  updatedAt?: Date;
};

export type HeroList = {
  id: number;
  icon: string;
  title: string;
};

export type HeroData = {
  id: number;
  title: string;
  desc: string;
  btn: string;
  img: ImageData;
  listHeroIcon: HeroList[];
};

export type ProfessionalData = {
  id: number;
  title: string;
  professionalTools: Professional[];
};

export type Professional = {
  id: number;
  title: string;
  icon: string;
  img: ImageData;
  content?: string;
};

export interface Attributes extends BuiltInDates {
  title?: string;
  desc?: string;
  hero?: HeroData;
  professional?: ProfessionalData;
}

export type TypedColumn =
  | "hero"
  | "professional"
  | "integration"
  | "dealers"
  | "uses"
  | "ai"
  | "nativeIntegration"
  | "testimonials";

type ImageData = {
  data: {
    id: number;
    attributes: StrapiImage;
  };
};

type StrapiImage = {
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
  createdAt: Date;
  updatedAt: Date;
  formats: {
    thumbnail: StrapiImageFormat;
    small: StrapiImageFormat;
    medium: StrapiImageFormat;
    large: StrapiImageFormat;
  };
};

type StrapiImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
};
