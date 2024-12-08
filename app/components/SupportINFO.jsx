import React from 'react';
import Image from 'next/image'; // if you're using Next.js, else you can use <img> tag
import UNITED from "@/app/assets/united-24.jpg"
import Link from 'next/link';


const SupportINFO = () => {
/*   const handleDonateClick = () => {
    // Handle the button click (e.g., navigate to donation page)
    alert('Thank you for your support!');
  }; */

  return (
    <div className="support-container">
      <div className="support-content">
        <h2>Støtte til Ukraine</h2>
        <p>
        Din donation kan virkelig hjælpe Ukraine i disse
        vanskelige tider. Klik på knappen nedenfor for at vise din støtte.
        </p>
        <Link className="donate-btn" href="https://u24.gov.ua/">
          Donate Nu
        </Link>
      </div>
      <div className="support-image">
        <Image
          src={UNITED}
          alt="Support Ukraine"
          width={500}
          height={300}
          className="image"
        />
      </div>
    </div>
  );
};

export default SupportINFO;
