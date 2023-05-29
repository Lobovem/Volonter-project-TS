import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { DonateAllnWithLayout } from '../SectionHOC/SectionHOC';

export const PageDonate = () => {
  return (
    <>
      <Breadcrumbs />
      <DonateAllnWithLayout
        titleSection="допомогти"
        classNameSectionWrap="sectionWrapShortLarge"
        classNameTitleSection="titleSection"
        classNameSection="section"
      ></DonateAllnWithLayout>
    </>
  );
};
