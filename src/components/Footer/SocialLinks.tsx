import {
  Instagram,
  Twitter,
  Facebook,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const socialLinks = [
  { Icon: Instagram, url: "https://instagram.com" },
  { Icon: Twitter, url: "https://twitter.com" },
  { Icon: Facebook, url: "https://facebook.com" },
  { Icon: LinkedIn, url: "https://linkedin.com" },
  { Icon: YouTube, url: "https://youtube.com" },
];

export function SocialLinks() {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-xl text-cyan-300 font-bold mb-4">Follow Us</h3>
      <div className="flex justify-center md:justify-start space-x-4">
        {socialLinks.map(({ Icon, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500"
          >
            <Icon fontSize="large" />
          </a>
        ))}
      </div>
    </div>
  );
}
