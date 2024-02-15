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