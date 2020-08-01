import * as React from 'react';

// Blocks
import * as b from 'global/blocks';

// Styles
import { Wrapper } from 'styles/Footer/Landing/Sections';

// Components
import { Section } from 'components/Footer/Landing/Section';

export const Sections: React.FC<{}> = () => {
  const sections = [
    {
      subsections: [
        {
          title: 'Product',
          items: [
            { name: 'Features', url: '/' },
            { name: 'Enterprise', url: '/' },
            { name: 'Security', url: '/' },
            { name: 'Customer Stories', url: '/' },
            { name: 'Pricing', url: '/' },
            { name: 'Slack Demo', url: '/' },
          ],
        },
        {
          title: 'Slack for teams',
          items: [
            { name: 'Engineering', url: '/' },
            { name: 'Financial Services', url: '/' },
            { name: 'Sales', url: '/' },
            { name: 'IT', url: '/' },
            { name: 'Marketing', url: '/' },
            { name: 'Customer Support', url: '/' },
            { name: 'Human Resources', url: '/' },
            { name: 'Project Management', url: '/' },
            { name: 'Media', url: '/' },
          ],
        },
      ],
    },
    {
      subsections: [
        {
          title: 'Resources',
          items: [
            { name: 'Slack Tips', url: '/' },
            { name: 'Blog', url: '/' },
            { name: 'Events', url: '/' },
            { name: 'Slack Certified Program', url: '/' },
            { name: 'Help Center', url: '/' },
            { name: 'API', url: '/' },
            { name: 'App Directory', url: '/' },
            { name: 'Download Slack', url: '/' },
            { name: 'Partners', url: '/' },
          ],
        },
        {
          title: 'Company',
          items: [
            { name: 'About Us', url: '/' },
            { name: 'Leadership', url: '/' },
            { name: 'News', url: '/' },
            { name: 'Media Kit', url: '/' },
            { name: 'Careers', url: '/' },
          ],
        },
      ],
    },
  ];

  return (
    <Wrapper>
      {sections.map((subsection, index) => {
        return <SubSections key={index} {...subsection} />;
      })}
    </Wrapper>
  );
};

interface Props {
  subsections: {
    title: string;
    items: { name: string; url: string }[];
  }[];
}

const SubSections: React.FC<Props> = ({ subsections }) => {
  return (
    <>
      <b.Box width={1}>
        <b.Flex>
          {subsections.map((subsection, index) => {
            return <Section key={index} {...subsection} />;
          })}
        </b.Flex>
      </b.Box>
    </>
  );
};
