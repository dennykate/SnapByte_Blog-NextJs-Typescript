import { ReactNode } from "react";

export interface NavItemProps {
  title: string;
  path: string;
}

export interface UserInfoProps {
  profile: string;
  name: string;
  email: string;
}

export interface CardDataProps {
  thumbnail: string;
  title: string;
  description: string;
  slug: string;
  upload_by: UserInfoProps;
  created_at: string;
  views?: number;
  likes?: number;
}

export interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

export interface FileInputProps {
  setValue: (value: string) => void;
}

export interface GuardProps {
  children: ReactNode;
}

export interface NavItemsProps {
  column?: boolean;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ThumbnailType {
  thumbnail: string;
  setThumbnail: (thumbnail: string) => void;
}

export interface TextareaProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}
