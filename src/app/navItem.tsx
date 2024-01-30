import Image from "next/image";
import styles from "./navItem.module.css"

export interface navItemProps {
    svg?: string
    name?: string
}
const NavItem  = ({svg, name}:navItemProps) =>  {
  return <>
    <div className={styles.wrapper}>
        <Image
            src={`/${svg}`}
            alt="Search Logo"
            width={32}
            height={32}
            priority
        />
        <h2>
            {name}
        </h2>
    </div>
  </>
};

export default NavItem
