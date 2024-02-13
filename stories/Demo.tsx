import React from 'react';
import { useSocialShare } from '../src/hooks/useSocialShare';
import { useSocialAssets } from '../src/hooks/useSocialAssets';

export const Demo = () => {
  const { twitter } = useSocialShare({
    url: 'https://boluabiola.com',
  });

  const assets = useSocialAssets();

  return (
    <div>
      <ul>
        <li>Twitter shareable url - {twitter}</li>
        <li>
          Twitter colors -
          <pre>{JSON.stringify(assets.twitter.colors, null, 2)}</pre>
        </li>
      </ul>
    </div>
  );
};
