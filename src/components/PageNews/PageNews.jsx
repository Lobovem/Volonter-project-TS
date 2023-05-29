import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { PaginationWithLayout } from '../SectionHOC/SectionHOC';

export const PageNews = () => {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <PaginationWithLayout
        titleSection="новини"
        classNameSectionWrap="sectionWrapShort"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
        itemsPerPage={5}
      ></PaginationWithLayout>
    </>
  );
};
