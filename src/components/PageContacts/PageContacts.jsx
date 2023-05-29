import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { ContactsWithLayout, DonateWithLayout, FormWithLayout } from '../SectionHOC/SectionHOC';
// import s from './PageContacts.module.css';

export const PageContacts = () => {
  return (
    <>
      <Breadcrumbs />

      <ContactsWithLayout
        titleSection="контакти"
        classNameSectionWrap="sectionWrapShort"
        classNameTitleSection="titleSection"
        classNameSection="section"
      ></ContactsWithLayout>

      <FormWithLayout
        titleSection="форма зворотнього зв'язку"
        classNameSectionWrap="sectionWrapShortSuper"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></FormWithLayout>

      <DonateWithLayout
        classNameSectionWrap="sectionWrapShortLargeSuper"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></DonateWithLayout>
    </>
  );
};
