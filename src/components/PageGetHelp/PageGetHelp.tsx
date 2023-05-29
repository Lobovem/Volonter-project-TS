import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { FormWithLayout, GetHelpWithLayout } from '../SectionHOC/SectionHOC';
import s from './PageGetHelp.module.scss';

export const PageGetHelp = () => {
  return (
    <>
      <Breadcrumbs />

      <GetHelpWithLayout
        titleSection="отримати допомогу"
        classNameSectionWrap="sectionWrapShortAlt"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      />

      <FormWithLayout
        titleSection="Звʼязжіться з нами будь-яким зручним для вас засобом зазаначеним у розділі контакти або скористайтесь формою нижче"
        classNameSectionWrap="sectionWrapShort"
        classNameTitleSection="titleSectionAlt"
        classNameSection="section"
      />
    </>
  );
};
