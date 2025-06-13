import { Link } from "react-router-dom";
import { SITE_CONFIG, NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-border">
      <div className="container mx-auto container-padding">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <span className="text-xl font-bold text-white">
                  🎧 {SITE_CONFIG.name}
                </span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                {SITE_CONFIG.description}
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Navigation</h3>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Légal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    Conditions d'utilisation
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@zenikast.com"
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    Nous contacter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits
                réservés.
              </p>
              <p className="text-sm text-muted-foreground">
                Fait avec ❤️ pour les auditeurs passionnés
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
