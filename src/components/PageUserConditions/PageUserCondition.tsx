import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { UserConditionWithLayout } from '../SectionHOC/SectionHOC';
// import s from './PageUserCondition.module.scss';

export const PageUserCondition = () => {
  return (
    <>
      <Breadcrumbs />

      <UserConditionWithLayout
        titleSection="умови використання сайту"
        classNameSectionWrap="sectionWrapShort"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      />
    </>
  );
};
