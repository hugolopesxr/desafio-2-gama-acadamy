import { WrapFooter } from "./style";
type FooterProps = {
  title: string;
};

const Footer = ({ title }: FooterProps) => {
  return (
    <WrapFooter>
      <a target="_blank" href="https://github.com/hugolopesxr" rel="noreferrer">
        <h2>{title}</h2>
      </a>
    </WrapFooter>
  );
};

export default Footer;
