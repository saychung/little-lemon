import { memo } from 'react';

const Logo = memo(() => {
const logo = './assets/Logo.svg'
  return <img src={logo} alt='logo' />;
});
export default Logo