import { Banner } from '../Banner/Banner';
import {
  AboutUsWithLayout,
  ContactsWithLayout,
  DonateWithLayout,
  FormWithLayout,
  NewsWithLayout,
  OurRulesWithLayout,
  TeamsWithLayout,
  WayWithLayout,
} from '../SectionHOC/SectionHOC';

export const PageHome = () => {
  return (
    <>
      <Banner></Banner>
      <AboutUsWithLayout
        titleSection="український гуманітарний батальйон"
        classNameSectionWrap="sectionWrap"
        classNameTitleSection="titleSection"
        classNameSection="section"
      ></AboutUsWithLayout>

      <NewsWithLayout
        titleSection="новини"
        classNameSectionWrap="sectionWrap"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      ></NewsWithLayout>

      <OurRulesWithLayout
        titleSection="наші результати"
        classNameSectionWrap="sectionWrapAlt"
        classNameTitleSection="titleSection"
        classNameSection="section"
      ></OurRulesWithLayout>

      <WayWithLayout
        titleSection="напрямки підтримки"
        classNameSectionWrap="sectionWrapAlt"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      ></WayWithLayout>

      <DonateWithLayout
        classNameSectionWrap="sectionWrap"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></DonateWithLayout>

      <TeamsWithLayout
        titleSection="команда"
        classNameSectionWrap="sectionWrapAlt"
        classNameTitleSection="titleSection"
        classNameSection="sectionAlt"
      ></TeamsWithLayout>

      <ContactsWithLayout
        titleSection="контакти"
        classNameSectionWrap="sectionWrap"
        classNameTitleSection="titleSection"
        classNameSection="section"
      ></ContactsWithLayout>

      <FormWithLayout
        titleSection="форма зворотнього зв'язку"
        classNameSectionWrap="sectionWrapShort"
        classNameTitleSection="visuallyHidden"
        classNameSection="section"
      ></FormWithLayout>
    </>
  );
};
