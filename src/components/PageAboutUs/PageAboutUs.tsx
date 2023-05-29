import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { AboutUsWithLayout, DonateWithLayout, TeamsWithLayout } from '../SectionHOC/SectionHOC';

export const PageAboutUs = () => {
  return (
    <>
      <Breadcrumbs />
      <AboutUsWithLayout
        titleSection="про нас"
        classNameSectionWrap="sectionWrapShort"
        classNameTitleSection="titleSection"
        classNameSection="section"
      ></AboutUsWithLayout>

      <TeamsWithLayout
        titleSection="команда"
        classNameSectionWrap="sectionWrapAlt"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      ></TeamsWithLayout>

      <DonateWithLayout
        classNameSectionWrap="sectionWrap"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></DonateWithLayout>
    </>
  );
};
