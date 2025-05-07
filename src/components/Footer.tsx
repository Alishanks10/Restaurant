import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-cyan-700 text-white py-6 mt-30">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-lg font-semibold mb-4 md:mb-0">Follow us:</h2>
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.facebook.com"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.x.com"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
}
