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

export interface IRootState {
  listMenu: IListMenu[] | [],
  listNews: IListNews[] | [],
  oneNews: IListNews | {},
  formData: IInputDataForm[] | [],
  inputDataForm: IInputDataForm,
  isLoading: boolean,
  error: string,
  burgerState: boolean,
}
