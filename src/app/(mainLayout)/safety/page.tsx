
import Image from 'next/image'
import React from 'react'

export default function SafetyPage() {
    return (
        <>
            <div>
                <Image src={'/images/safety.jpg'} alt={'Mr_Kim_Logo'} width={500} height={100} quality={100} className='w-full rounded-lg mt-4' />
                <div className='py-10'>
                    <p>Safety - Smart Hiring on Mr.KIM</p>
                    <h1 className='text-primary font-bold text-2xl'>Before you hire a professional service provider in your local area, there are a few things should look out for. Our tips are below.</h1>
                </div>

                <div className='pb-10'>
                <p className='font-light text-primary text-2xl '>Review the pro’s profile</p>
<p>Profiles are designed to give you helpful information to hire the right professional service provider. See some tips below:</p>


<div className=''>
<p className='font-bold mt-4'> 1. Customer reviews.</p>
<p>See what past customers say about a professional service provider. Verified reviews are from customers who hired a professional service provider through Mr.KIM app, while unverified reviews are from customers who found the professional services providers somewhere else. You can also see how a professional service providers responded to reviewers, which can help you understand how they interact with their customers.</p>

<p className='font-bold mt-4'>2. Business information.</p>
The profile gives the professional service providers a chance to tell you about their business —and explain why you should hire them. You’ll see things like pictures of their work, a description of their business, why they love what they do, a link to their website and how many times they’ve been hired through Mr.KIM.

<p className='font-bold mt-4'>3. Credentials.</p>
We know a professional service provider’s credentials are important to hiring with confidence. A professional service provider’s profile may include:

<ol className='list-decimal list-inside'>
<li className='border-b border-primary space-y-2  pb-2 my-2'>A <span className='font-bold'>Top Professional service provider</span> badge, which means they’re highly rated across several reviews from Mr.KIM customers.</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>A license badge, which means we’ve used a public database to verify the license number they provided.</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>A background check badge, which means the account holder submitted a background check and met our criteria to receive the background check badge. For businesses with multiple workers, this does not guarantee the specific person you are working with has passed a background check, so be sure you are comfortable with the person completing your request.</li>
</ol>

<p className='font-light text-primary text-2xl pt-6'>Learn more about the professional service provider</p>
<ol className='list-decimal list-inside'>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Ask questions. We make it easy to talk to a professional service provider without revealing any of your contact info. So, be sure to ask as many questions as you need and tell them exactly what you’re looking for. You might want to ask about:</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Ask for pictures of past work</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Ask for references from past customers</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Ask whether your project requires a permit</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>If the professional service provider plans to subcontract any of the work</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>You can also send a professional service provider picture of what you’re looking for. Don’t be afraid to schedule a phone call or an in-person meeting.</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Research. It’s always worth seeing what other information you can find about a professional service provider you’re considering. Think about resources where you might find professional service providers more information before making hiring decision.</li>
</ol>

<p className='font-light text-primary text-2xl pt-6'>Plan ahead to make sure the job is done right</p>
<ol className='list-decimal list-inside'>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Set expectations in writing. A written agreement is the best way to make sure everyone is on the same page. Include details like the who, what, where, and cost of your project.</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Agree on payment. Especially for high-value projects, don’t pay with cash (or via wire transfer or cashier’s check), and limit your down payment. Consider making payments during the project contingent on completion of defined amounts of work.</li>
</ol>

<p className='font-light text-primary text-2xl pt-6'>Think through insurance, permitting, and licensing</p>
<ol className='list-decimal list-inside'>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Verify insurance. Something unexpected may happen during your project, so check your insurance policies to make sure you’re covered. Your own insurance provider is always the best resource to learn if your policy covers any risks associated with your project. You should also verify a professional service provider’s insurance where applicable.</li>
<li className='border-b border-primary space-y-2  pb-2 my-2'>Get permits and check licensing. A professional service provider’s license requirements (or whether permits are required for your project) depends on the laws of your city and country, and what kind of project you’re hiring for. Contact your country’s central or local government about specific questions.</li>
</ol>
</div>
                </div>

            </div>
        </>
    )
}
