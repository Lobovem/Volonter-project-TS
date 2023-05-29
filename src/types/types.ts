export interface IListMenu {
  id: string;
  title: string;
  path: string;
  breadcrumb: string;
  show: boolean;
}

export interface IListNews {
  id: string;
  title: string;
  desc: string;
  photoMain: string;
  photoList: string[];
  path: string;
  breadcrumbs: string;
}

export interface IInputDataForm{
  id: string;
  name: string;
  email: string;
  textarea: string;
}

export interface IContentState {
  listMenu: IListMenu[] | [],
  listNews: IListNews[] | [],
  oneNews: IListNews | {},
  formData: IInputDataForm[] | [],
  inputDataForm: IInputDataForm,
  isLoading: boolean,
  error: string | undefined,
  burgerState: boolean,
}

export interface IRootState {
  content: IContentState;
}

export interface BtnProps {
  title?: string;
  onClick?: () => void;
  className: string;
  type?: "button" | "submit" | "reset";
  prevRef?: any;
  nextRef?: any;
}

export interface LangSiteProps {
  href: string;
}
