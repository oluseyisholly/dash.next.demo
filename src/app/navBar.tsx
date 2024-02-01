"use client"
import Image from "next/image";
import styles from "./layout.module.css";

export interface navBarProps {
    handlclick: () => void
}
const NavBar  = ({ handlclick}:navBarProps) =>  {

    const func = () => {
        console.log('func')
    }
  return <>
        <div className={styles.navbar2}>
            <span style={{cursor: 'pointer'}}  onClick={handlclick}>
                <Image
                    src="/hamburger.svg"
                    alt="Search Logo"
                    width={24}
                    height={24}
                   
                />
            </span>

            <div>
                <div></div>
                <Image
                    src="/arrowDown.svg"
                    alt="Search Logo"
                    width={24}
                    height={24}
                    priority
                />
                
            </div>
        </div>
        <div className={styles.navbar}>
            <h4>Hi Student name</h4>
            <div>
                <div>
                <input placeholder="search"/>
                <Image
                    src="/search.svg"
                    alt="Search Logo"
                    width={24}
                    height={24}
                    priority
                />
                </div>
            </div>
            <div>
                <div>
                <Image
                    src="/help.svg"
                    alt="Search Logo"
                    width={24}
                    height={24}
                    priority
                />
                <span>Help</span>
                </div>
                <div>
                <Image
                    src="/logout.svg"
                    alt="Search Logo"
                    width={24}
                    height={24}
                    priority
                />
                <span>Logout</span>
            </div>
        </div>
    </div>
  </>
};

export default NavBar
