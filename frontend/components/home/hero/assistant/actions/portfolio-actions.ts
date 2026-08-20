export enum PortfolioActionType {
  SCROLL = "scroll",
  DOWNLOAD_RESUME = "download_resume",
  OPEN_GITHUB = "open_github",
  OPEN_LINKEDIN = "open_linkedin",
  OPEN_CONTACT = "open_contact",
  NONE = "none",
}

export interface PortfolioAction {
  type: PortfolioActionType;
  target?: string;
}