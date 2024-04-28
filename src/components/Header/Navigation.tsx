import { navSections } from './header.data';
import styles from './Navigation.module.scss';
import NavigationAnchor from './NavigationAnchor';

interface Props {
  activeSection: number;
}

export default function Navigation({ activeSection }: Props) {
  return (
    <nav className={styles.nav}>
      {navSections.map((section, index) => (
        <NavigationAnchor
          key={section.id}
          href={'#' + section.id}
          text={section.name}
          active={index === activeSection}
        />
      ))}
    </nav>
  );
}
