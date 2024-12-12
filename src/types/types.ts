export interface User {
  name: string;
  email: string;
  id: string;
  isAdmin: boolean;
  isVerified: boolean;
};

export enum CONTENT_ORIENT {
  IMG_LEFT = 'imgLeft',
  IMG_RIGHT = 'imgRight'
}

export enum CONTENT_BG_COLOR {
  GREY = 'grey',
  WHITE = 'white',
  BLACK = 'black'
}

export interface ContentSection {
  _id?: string;
  title: string;
  description: string;
  imgUrl: string;
  imgAlt: string;
  btnText: string;
  btnUrl: string;
  type: CONTENT_ORIENT;
  bgColor: CONTENT_BG_COLOR;
  position?: number;
  isNew?: boolean;
  user?: User;
}

export enum EmailType {
  VERIFY = "verify-email",
  FORGOT_PASS = "forgot-password"
};
