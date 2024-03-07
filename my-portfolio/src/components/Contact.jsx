/* eslint-disable react/no-unescaped-entities */


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center px-4 items-center'>
        <form method='POST' action="https://getform.io/f/lakookxa" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 font-anta'>Contact</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md font-anta outline-0' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md font-anta outline-0' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md font-anta outline-0' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8  mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact