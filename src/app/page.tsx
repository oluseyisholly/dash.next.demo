"use client"

import Image from "next/image";
import styles from "./page.module.css";
import CourseCard from "./courseCard";
import { Box, Button, CircularProgress } from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Course Overview</h1>
      <section>
            <CourseCard svg="courses.svg" value={20} name="Courses Taken" bgColor="#4F46E51A" cirColor="#4B4DED" />
            <CourseCard svg="courses.svg" value={13} name="Ongoing Courses" bgColor="#F79E1B1A" cirColor="#F79E1B" />
            <CourseCard svg="courses.svg" value={20} name="Semester Units" bgColor="#2983FF1A" cirColor="#2983FF" />
            <CourseCard svg="courses.svg" value={20} name="Outstanding Courses" bgColor="#FF00001A" cirColor="#FF0000" />
      </section>

      <section>
        <div>
          <Image
              src={`/photo.svg`}
              alt="Search Logo"
              width={150}
              height={150}
              priority
          />
          <div>
            <div>
               <p>Department:</p>
               <h2>Surveying and Geoinformatics</h2>
            </div>
            <div>
               <p>Matriculation Number</p>
               <h2>SVG/12/3456</h2>
            </div>
            <div>
            < Button  variant="outlined">Edit Profile</Button>
          </div>
          </div>
          
        </div>

        <div>
          <div>
            <div>
               <p>First Name and Middle Name</p>
               <h2>Ayomide</h2>
            </div>
            <div>
               <p>Last Name</p>
               <h2>Akinyemi</h2>
            </div>
            <div>
               <p>Email Address</p>
               <h2>ayomideakin@mail.com</h2>
            </div>
          </div>
          <div>
            <div>
               <p>Personal Phone Number</p>
               <h2>08146550397</h2>
            </div>
            <div>
               <p>Parent/Guardian Phone Number</p>
               <h2>08012345678</h2>
            </div>
            <div>
               <p>Residential Address</p>
               <h2>No. 1, Full address, City, State, Country</h2>
            </div>
          </div>
          <div>
            <div>
               <p>Marital Status</p>
               <h2>Single</h2>
            </div>
            <div>
               <p>Religion</p>
               <h2>Christianity</h2>
            </div>
            <div>
               <p>Disability</p>
               <h2>None</h2>
            </div>
          </div>
        </div>

        <div>
          <div >
          <DateCalendar     sx={{ fontSize: '300px'}}  />
          </div>
          <div>
            <h4>Current CGPA</h4>
            <div>
              <div>
                  <p>remark</p>
                  <span>Good Standing</span>
              </div>
              <div>
                  <p>4.29</p>
                  <span>86%</span>
                <div className={styles.circularProgressWrapper}>
                  <CircularProgress sx={{color: '#006924'}}  className={styles.circularProgress } variant="determinate" value={86} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
