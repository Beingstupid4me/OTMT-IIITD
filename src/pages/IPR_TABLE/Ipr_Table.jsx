import React from 'react';
import './Ipr_Table.css';

const IPRTable = () => {
  return (
    <div className="ipr-container">
      <h1 className="ipr-title">Our IPRs</h1>
      <table className="ipr-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Application No./Published No.</th>
            <th>Inventors</th>
            <th>Filling Phase National or International</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Photoreceiver enabled smart phone</td>
            <td>201911032080</td>
            <td>Dr. Abhijeet Mitra, Prof. Anand Srivastava, Prof. Visveshwaran, Arshan Zaman</td>
            <td>National</td>
          </tr>
          <tr>
            <td>2</td>
            <td>A NFC POWERED SMART WEARABLE HYGIENE PRODUCT</td>
            <td>1/45340/2019-DEL</td>
            <td>Dr. Aman Parnami & Manideepa Mukherjee</td>
            <td>National</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gene Panel for Detecting the Presence of Blood based Genetic Markers of Non small Lung Cancer</td>
            <td>TEMP/E-1/46638/2020-DEL</td>
            <td>Dr. Debarka Sengupta, Chitrita Goswami & Smriti Chawla</td>
            <td>National</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hybrid Cache Coherence Protocol for Multicore Processors</td>
            <td>TEMP/E-1/60400/2020-DEL</td>
            <td>Harsha Narayan Gade and Dr. Sujay Deb</td>
            <td>National</td>
          </tr>
          <tr>
            <td>5</td>
            <td>A Device and System for Biometric Template Protection</td>
            <td>1917/DEL/2015</td>
            <td>Donghoon Chang, Surabhi Garg, Neha Gupta</td>
            <td>National</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Touchless Blood Pressure and Heart Rate Estimation</td>
            <td>201611028804</td>
            <td>Monika Jain, A V Subramanyam, Sujay Deb and Angshul Majumdar</td>
            <td>National</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Smartphone Based Health Monitoring Using the Inbuilt Camera</td>
            <td>201611028803</td>
            <td>Monika Jain, Sujay Deb and Angshul Majumdar</td>
            <td>National</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Escort Bot System and Method</td>
            <td>201711013219</td>
            <td>Pushpendra Singh, Shubham Sinha; Kartik Maji; Tarunvar Aggarwal</td>
            <td>National</td>
          </tr>
          <tr>
            <td>9</td>
            <td>System and Method for Minimal Residual Disease (MRD) Detection in Acute Lymphoblastic Leukemia</td>
            <td>201611031953</td>
            <td>Dr. Anubha Gupta, Dr. Ritu Gupta, Naushad Ansari</td>
            <td>National</td>
          </tr>
          <tr>
            <td>10</td>
            <td>WEARABLE DEVICE AND METHOD OF SLAYING INSECTS</td>
            <td>201811025230</td>
            <td>Himanshu Chandana (Student) & Aman Parnami</td>
            <td>National</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Wearable Device and Method of Operating the Same to Perform Multiple Functions Seamlessly</td>
            <td>201811025231</td>
            <td>Sagar Khurana (Student), Paras Jain (Student), Harshit Verma (Student) & Aman Parnami</td>
            <td>National</td>
          </tr>
          <tr>
            <td>12</td>
            <td>A system and method for energy harvesting during analog signal sampling</td>
            <td>201811008597</td>
            <td>Neha Jain, Dr. Vivek Bohara, Dr. Anubha Gupta</td>
            <td>National</td>
          </tr>
          <tr>
            <td>13</td>
            <td>A method and system for Multi-frequency DC- Feed Network Design</td>
            <td>201611028802</td>
            <td>M.A. Maktoomi & M.S. Hashmi</td>
            <td>National</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Generic tri-frequency impedance transformation network for RF/microwave active and passive circuits, components and systems</td>
            <td>201611022038</td>
            <td>M.A. Maktoomi & M.S. Hashmi</td>
            <td>National</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Capacitive energy harvester from ac power lines</td>
            <td>201811033277</td>
            <td>Manoj Gulati, Dr. Amarjeet Singh, Prof. Shwetak N. Patel</td>
            <td>National</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Non-Invasive Method and system for Blood pressure & Heart rate estimation using ECG and Photoplethysmogram (PPG)</td>
            <td>201711016814</td>
            <td>Monika Jain, Sujay Deb and Angshul Majumdar</td>
            <td>National</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Finding Rare Samples in a Given Dataset</td>
            <td>201811042117</td>
            <td>Dr. Debarka, Ashi Jindal, Prashant Gupta, Prof. Jayadeva</td>
            <td>National</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Method and System for Post Silicon Validation</td>
            <td>201911006527</td>
            <td>Dr. Sujay, Siddharth Sankar Rout</td>
            <td>National</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Eyewear, System and Method to Facilitate Reading for the Visually Impaired</td>
            <td>201911020013</td>
            <td>Raunak Srikant Mokhasi, Shaidh Nawaz Khan, Anjanay Kirti Gour, Bharath Kumar Thulasidoss</td>
            <td>National</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Kidney Biopsy Assessment System and Method</td>
            <td>201811043770</td>
            <td>Dr. Rajiv Ratn Shah, Dr. Shree Gopal Sharma, Meghna P Ayyar, Puneet Mathur</td>
            <td>National</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IPRTable;
