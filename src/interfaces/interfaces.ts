import { SetStateAction, Dispatch } from 'react';

export interface CSSRuleExtended extends CSSRule {
  media?: any,
  initialValue?: any
}

export interface GoToLinkButtonI {
  link: string
}

export interface arrayCertificationsI {
  id: number,
  title: string,
  media: any,
  href: string,
  url: string
}

export interface arrayTechnologiesI {
  id: number,
  icon: any,
  title: string,
  url: string
}

export interface arrayNewsI {
  id: number,
  date: string,
  text: string,
}

export interface arraySkillsI {
  id: number,
  title: string,
  percentage: number
}

export interface ModalI {
  images?: string[],
  index?: number,
  setShowModal?: Dispatch<SetStateAction<boolean>>,
  controlsOutside?: boolean,
}

export interface operationI {
  [key: string] : (a: number, b: number) => number,
}

export interface comparisonI {
  [key: string] : (a: number, b: number) => boolean,
}