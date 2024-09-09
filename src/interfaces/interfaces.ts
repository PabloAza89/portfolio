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

export interface ImageViewerI {
  images?: string[],
  index?: number,
  setShowImageViewer?: Dispatch<SetStateAction<boolean>>,
  controlsOutside?: boolean,
  disableAnimation?: boolean,
  timing?: number,
  mode?: string
}

export interface operationI {
  [key: string] : (a: number, b: number) => number,
}

export interface comparisonI {
  [key: string] : (a: number, b: number) => boolean,
}

export interface currentZoomI {
  val: number,
  mORd: string,
  aORs: string,
  lORm: string,
  dF: number
}