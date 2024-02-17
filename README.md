# Social hooks
A React hook library for social media.


## Installation
```
npm i social-hooks
yarn add social-hooks
pnpm add social-hooks
```


## Hooks

### useSocialShare
A custom hook for generating social media share URLs. This hook formats the share URL based on the specified social media platform and supported parameters.

Note that each social media platform has its own set of supported parameters.


#### Usage

```tsx
import { useSocialShare } from 'social-hooks';

const Demo = () => {
  const { twitter } = useSocialShare({
    url: 'https://google.com',
  });

  return (
    <div>
      Shareable twitter url: {twitter}.
     {/*  https://twitter.com/intent/tweet?url=https%3A%2F%2Fgoogle.com */}
    </div>
  );
};
```

#### Supported Parameters

- `url` - URL to be shared.
- `text` - Text content to be shared.
- `imageUrl` - ImageURL to be shared.
- `description` - Description to be shared


<br/>
<br/>

### useSocialAssets
A custom hook for getting social media assets such as colors, ... etc


#### Usage

```tsx
import { useSocialAssets } from 'social-hooks';

const Demo = () => {
  const { twitter, linkedIn, whatsapp, pinterest } = useSocialAssets();

  return (
    <div>
      Whatsapp assets: {whatsapp.colors}
    {/*  
        [
            {
                name: 'Teal green',
                hex: '#075E54',
                rgb: 'rgb(7, 94, 84)',
            },
            {
                name: 'Light green',
                hex: '#25D366',
                rgb: 'rgb(37, 211, 102)',
            },
        ]

    */}
    </div>
  );
};
```


## Supported
- Facebook
- X (formerly Twitter)
- Telegram
- Whatsapp
- LinkedIn
- Pinterest
- VK
- Odnoklassniki
- Reddit
- Tumblr
- Mail.Ru


## Assets
- Colors from https://www.brandcolorcode.com