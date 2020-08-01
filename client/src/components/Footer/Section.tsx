import * as React from 'react';
import * as b from 'global/blocks';

import {
  Wrapper,
  SectionName,
  Items,
  Item,
  ItemLink,
} from 'styles/Footer/Section';

interface Props {
  title: string;
  items: ItemProps[];
}

interface ItemProps {
  name: string;
  url: string;
}

export const Section: React.FC<Props> = ({ title, items }) => {
  return (
    <Wrapper>
      <b.Box>
        <SectionName py={2}>
          <b.Text>Product</b.Text>
        </SectionName>
        <Items>
          {items.map((item: ItemProps, index) => {
            return (
              <Item key={index}>
                <ItemLink to={item.url}>{item.name}</ItemLink>
              </Item>
            );
          })}
        </Items>
      </b.Box>
    </Wrapper>
  );
};
