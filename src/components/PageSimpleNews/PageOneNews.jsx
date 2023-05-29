import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DonateWithLayout, OneNewsWithLayout } from '../SectionHOC/SectionHOC';

export const PageOneNews = () => {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <OneNewsWithLayout
        classNameSectionWrap="sectionWrapShortAlt"
        classNameTitleSection="visuallyHidden"
        classNameSection="sectionAlt"
      ></OneNewsWithLayout>

      <DonateWithLayout
        titleSection="Допомогти"
        classNameSectionWrap="sectionWrapShortLarge"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></DonateWithLayout>
    </>
  );
};
