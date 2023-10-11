import FirstBlock from './TitleBlock/FirstBlock';
import ServiceBlock from './ServicesBlock/ServiceBlock';
import QualityBlock from './QualityBlock/QualityBlock';
import data from '../data/data.json';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import FAQBlock from './FAQ/FAQBlock';
import Social from './Social/Social';
import LeadMagnetWidget from './LeadMagnetWidget/LeadMagnetWidget';
import BriefFormBlock from './Brief/Brief';

export const App = () => {
  return (
    <main>
      <FirstBlock />
      <LeadMagnetWidget />
      <QualityBlock />
      <ServiceBlock data={data} />
      <Projects />
      <Contacts />
      <BriefFormBlock />
      <FAQBlock />
      <Social />
    </main>
  );
};
