import Image from "next/image";
import styles from "./sideBarItem.module.css"

export interface navItemProps {
    svg?: string
    name?: string
}
const SideBarItem  = ({svg, name}:navItemProps) =>  {
  return <>
    <div className={styles.wrapper}>
        <Image
            src={`/${svg}`}
            alt="Search Logo"
            width={32}
            height={32}
            className={styles.navLogo}
            color="#4B4DED"
            priority
        />
        <h2>
            {name}
        </h2>
    </div>
  </>
};

export default SideBarItem
