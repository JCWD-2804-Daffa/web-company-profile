import React from 'react'
import Link from 'next/link'

const home = () => {
  const imageBanner = "https://images.squarespace-cdn.com/content/v1/5a3afc7390badee4df34b165/1536949169949-LUO15Y0Z8X5RWLANJOHX/Learn+Martial+Arts?format=1500w"
  
  return (
    <div className='flex flex-col items-center justify-center gap-32'>
      <section className='sm:flex items-center'>
        <div>
          <h1 className='xs:text-4xl sm:text-8xl font-bold'>We are Matrial Arts Specialist</h1>
          <div className='flex gap-3 mt-10'>
            <Link href="/services">
              <button className='bg-black text-white p-3 rounded-lg cursor-pointer'>Our Service</button>
            </Link>
            <Link href="/about">
              <button className='bg-black text-white p-3 rounded-lg cursor-pointer'>About Us</button>
            </Link>
          </div>
        </div>
        <img className='xs:w-full xs:mt-10 sm:w-[50%] rounded' src={imageBanner} alt='image-banner' />
      </section>

      <section className='sm:flex items-center gap-[450px]'>
        <div className='sm:w-48 xs:mb-10 sm:mb-0'>
          <iframe className='xs:w-[340px] xs:h-[200px] sm:w-[560px] sm:h-[315px]' src="https://www.youtube.com/embed/gB1Ojw0Yl_o?si=P-SIr1sbNb6EAlsY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-3'>Best Matrial Arts</h1>
          <p>
          Looking to boost your self-defense skills and enhance your personal safety? Learning martial arts is the perfect solution. Master effective self-defense techniques to feel confident and prepared in any situation. Whether it's navigating city streets or handling unexpected encounters, martial arts training equips you with the tools to stay safe and secure. Enhance your situational awareness and learn valuable conflict resolution strategies that prioritize non-violent solutions. Join us on a journey to strengthen your physical and mental resilience while fostering a community committed to personal safety and well-being. Start your martial arts journey today and empower yourself with skills that last a lifetime!
          </p>
        </div>
      </section>

      <section className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-10'>
          Membership
        </h1>
        <div className='flex xs:flex-col sm:flex-row gap-10'>
          <div className='bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5'>
            <h3 className='text-xl'>1 Months</h3>
            <p className='text-sm'>You can join the training for 1 month</p>
            <p className='text-xl'>Rp. 500.000</p>
          </div>
          <div className='bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5'>
            <h3 className='text-xl'>3 Months</h3>
            <p className='text-sm'>You can join the training for 3 month</p>
            <p className='text-xl'>Rp. 1.300.000</p>
          </div>
          <div className='bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5'>
            <h3 className='text-xl'>6 Months</h3>
            <p className='text-sm'>You can join the training for 6 month</p>
            <p className='text-xl'>Rp. 2.500.000</p>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-10'>
          Our Testimony
        </h1>
        <div className='flex xs:flex-col sm:flex-row gap-10'>
          <div className='bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5'>
            <h3 className='text-xl'>Mas Gondrong</h3>
            <p className='text-sm italic'>
            "Learning martial arts transformed how I feel walking alone at night. Now, I'm more aware and confident, knowing I have the skills to protect myself if needed. It's empowering!"
            </p>
          </div>
          <div className='bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5'>
            <h3 className='text-xl'>Yayat Bengkel</h3>
            <p className='text-sm italic'>
            "As a father, my priority is keeping my family safe. Martial arts training has given me the peace of mind that I can handle unexpected situations with calm and control. It's not just about physical strength; it's about mental readiness."
            </p>
          </div>
          <div className='bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5'>
            <h3 className='text-xl'>Fany Jungler</h3>
            <p className='text-sm italic'>
            "I used to feel anxious in crowded places, but martial arts taught me to trust my instincts and stay alert. It's amazing how much more confident I am now, knowing I have the ability to defend myself if necessary."
            </p>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default home