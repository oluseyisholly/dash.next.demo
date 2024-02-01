"use client"
import Image from "next/image";
import styles from "./layout.module.css";
import SideBarItem from "./sideBarItem";

const navItems = [
    {
      name: 'Dashboard',
      svg: 'dashboard.svg'
    },
    {
      name: 'Courses',
      svg: 'courses.svg'
    },
    {
      name: 'Result Checking',
      svg: 'result.svg'
    },
    {
      name: 'Transcripts',
      svg: 'transcript.svg'
    },
  ]

export interface navBarProps {
  className?: string
}
const SideBar  = ({className}:navBarProps) =>  {
  return <>
    <div className={`${styles.sidebarWrapper} ${className}`}>
      
              <aside className={styles.sidebar}>
                <div>
                  <div></div>
                  <h2>Federal University of Technology, Akure</h2>
                </div>
                <div >
                  <Image
                      src="/nedisLogo2.svg"
                      alt="Search Logo"
                      width={100}
                      height={50}
                  />
                </div>
                
                <div>
                  {
                    navItems.map((item, index) => <SideBarItem key={index}  svg={item.svg} name={item.name}/>)
                  }
                </div>
                <div>
                  <p>This solution is designed and delivered by <b>NEDSIS</b></p>
                  <Image
                      src="/nedsisLogo.svg"
                      alt="Search Logo"
                      width={100}
                      height={50}
                    />
                </div>
              </aside>
            </div>
  </>
};

export default SideBar
