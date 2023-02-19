import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type ActionButtonProps = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};
export const ActionButton = ({ children, setSelectedPage }: ActionButtonProps) => {
  return (
    <AnchorLink
      className="bg-secondary-500 hover:bg-primary-500 rounded-md px-10 py-2 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
