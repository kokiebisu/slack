import * as React from 'react';

// Blocks
import * as b from '../../../../styles/blocks';

// Styles
import { Columns } from './container.styles';

// Components
import { ColumnCard } from '.';

// Svgs
import { Organized, Looped, Focus } from '../../../../assets/svg';

interface Props {}

export const ColumnCards: React.FC<Props> = () => {
  const cards = [
    {
      icon: <Organized />,
      title: 'Conversations, organized',
      subtitle:
        'Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.',
    },
    {
      icon: <Looped />,
      title: 'Get looped in, not out',
      subtitle:
        'Slack makes it simple to follow conversations or find important information in an easily searchable archive.',
    },
    {
      icon: <Focus />,
      title: 'Give focus a chance',
      subtitle:
        'Unlike email, Slack lets you choose which conversations are most important — and which can wait.',
    },
  ];

  return (
    <Columns>
      <b.Flex>
        {cards.map((card) => {
          return <ColumnCard {...card} />;
        })}
      </b.Flex>
    </Columns>
  );
};
