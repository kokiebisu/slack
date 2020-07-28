import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import { Columns } from './container.styles';

// Components
import { ColumnCard } from '.';

// Svgs
import { Share, ConnectCall, Collaborate } from '../../../../assets/svg';

interface Props {}

export const ColumnCards: React.FC<Props> = () => {
  const cards = [
    {
      icon: <Share />,
      title: 'Share files',
      subtitle: 'Keep files and the messages about them together in channels.',
    },
    {
      icon: <ConnectCall />,
      title: 'Connect on a call',
      subtitle:
        'If working face to face is easier, go from channel to voice or video call in a click',
    },
    {
      icon: <Collaborate />,
      title: 'Collaborate with partners',
      subtitle:
        'Work faster with external clients, vendors and more by working in a channel',
    },
  ];

  return (
    <Columns>
      <b.Flex>
        {cards.map((card, index) => {
          return <ColumnCard key={index} {...card} />;
        })}
      </b.Flex>
    </Columns>
  );
};
