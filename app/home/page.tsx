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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas obcaecati quaerat odio tenetur, ipsum dolorum! Adipisci id earum tempora odit nisi consectetur suscipit dolorum nesciunt ut? Ad, nemo beatae.
            Animi repellendus fugit amet qui aliquam sit quaerat officiis reprehenderit similique nobis voluptate doloribus odio recusandae ad cumque consectetur ipsam, obcaecati blanditiis voluptas consequuntur quis dolor maiores. Vero, sunt sequi!
            Sapiente quisquam itaque in recusandae repellat ipsam possimus inventore fugiat corrupti dignissimos quia commodi placeat architecto amet quasi, ea praesentium nemo totam atque! Id reiciendis consequuntur nesciunt eius adipisci saepe.
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
            <h3 className='text-xl'>Customer 1</h3>
            <p className='text-sm italic'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam accusamus ea odio suscipit eveniet eum optio harum aut ipsam nobis non nisi nulla ut recusandae modi eligendi, possimus consectetur!
              Minus itaque officiis sed est consequatur repellat! Voluptatem officia impedit autem corrupti vel aspernatur non nisi asperiores consequatur hic doloremque in sapiente minus culpa porro ullam eaque, ratione temporibus at."
            </p>
          </div>
          <div className='bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5'>
            <h3 className='text-xl'>Customer 2</h3>
            <p className='text-sm italic'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam accusamus ea odio suscipit eveniet eum optio harum aut ipsam nobis non nisi nulla ut recusandae modi eligendi, possimus consectetur!
              Minus itaque officiis sed est consequatur repellat! Voluptatem officia impedit autem corrupti vel aspernatur non nisi asperiores consequatur hic doloremque in sapiente minus culpa porro ullam eaque, ratione temporibus at."
            </p>
          </div>
          <div className='bg-black text-white text-center p-10 rounded-lg flex flex-col gap-5'>
            <h3 className='text-xl'>Customer 3</h3>
            <p className='text-sm italic'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam accusamus ea odio suscipit eveniet eum optio harum aut ipsam nobis non nisi nulla ut recusandae modi eligendi, possimus consectetur!
              Minus itaque officiis sed est consequatur repellat! Voluptatem officia impedit autem corrupti vel aspernatur non nisi asperiores consequatur hic doloremque in sapiente minus culpa porro ullam eaque, ratione temporibus at."
            </p>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default home