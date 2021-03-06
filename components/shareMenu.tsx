import { Button, Dropdown } from 'semantic-ui-react';

export default function ShareMenu({ url }: { url: string }) {

  return (
    <Dropdown
      as={Button}
      title='Share Button'
      basic
      icon='share alternate'
      className='icon'
      button
      direction='left'
      circular
      floating>
      <Dropdown.Menu>
        <Dropdown.Item
          as='a'
          href={`mailto:?subject=Company on Tech Viet&body=Check out this Vietnam company: ${url}`}
          target="_blank"
          rel="noopener"
          icon={{ name: 'mail' }}
          text='Share by Email' />
        <Dropdown.Item
          as='a'
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener"
          icon={{ name: 'facebook' }}
          text='Share on Facebook' />
        <Dropdown.Item
          as='a'
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=Tech Viet Company Page`}
          target="_blank"
          rel="noopener"
          icon={{ name: 'linkedin' }}
          text='Share on LinkedIn' />
        <Dropdown.Item
          as='a'
          href={`https://twitter.com/intent/tweet/?text=Check out this Tech Viet company page&url=${url}&via=redeio`}
          target="_blank"
          rel="noopener"
          icon={{ name: 'twitter' }}
          text='Share on Twitter' />
      </Dropdown.Menu>
    </Dropdown>
  )
}