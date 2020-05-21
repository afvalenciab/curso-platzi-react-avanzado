import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Category } from '../Category';
import { useFetchData } from '../../hooks/useFetchData';
import { Div, List, ListItem, Section } from './styles';

export const ListOfCategory = () => {
  const [categories, loading] = useFetchData('https://petgram-server-afvalenciab.afvalenciab.now.sh/categories');
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 230;

      if (newShowFixed !== showFixed) {
        setShowFixed(newShowFixed);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderSkeleton = () => (
    <Section>
      {[...Array(6).keys()].map((item) => (
        <Div key={item}>
          <Skeleton circle height={75} width={75} />
          <Skeleton height={15} width={15} />
        </Div>
      ))}
    </Section>
  );

  const renderList = (defaultClass, fixed = null) => {
    let className = '';

    if (!defaultClass) {
      className = fixed ? 'fixed' : 'fixed out';
    }

    return (
      <List className={className}>
        {loading ? (
          renderSkeleton()
        ) : (
          categories.map((category) => (
            <ListItem key={category.id}>
              <Category {...category} />
            </ListItem>
          ))
        )}
      </List>
    );
  };

  return (
    <>
      {renderList(true)}
      {renderList(false, showFixed)}
    </>
  );
};
