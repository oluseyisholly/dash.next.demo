import Image from "next/image";
import styles from "./courseCard.module.css"

export interface courseCardProps {
    svg?: string
    name?: string
    value?: number
    bgColor?: string
    cirColor?: string
}
const CourseCard  = ({svg, name, value, bgColor, cirColor}:courseCardProps) =>  {
  return <>
    <div style={{backgroundColor: `${bgColor}`}} className={styles.wrapper}>
        <div style={{backgroundColor: `${cirColor}`}}>
            <Image
                src={`/${svg}`}
                alt="Search Logo"
                width={47}
                height={47}
                priority
            />
        </div>
        <div>
            <p>{value}</p>
            <span>{name}</span>
        </div>
        
    </div>
  </>
};

export default CourseCard
