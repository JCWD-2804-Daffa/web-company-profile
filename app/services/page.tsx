import React from 'react'
import Link from 'next/link'

const Service = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-32'>
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

export default Service