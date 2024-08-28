import { SocialLinks } from './SocialLinks';
import { FooterLogo } from './FooterLogo';
import { FooterCategories } from './FooterCategories';
import { Copyright } from './Copyright';

export function Footer() {
  return (
    <footer className="bg-black text-white mt-4 py-4">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SocialLinks />
          <FooterLogo />
          <FooterCategories />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
