import not_found from '../assets/images/page_not_found/not_found.svg'

const NotFound = () => {
  return (
    <main >
      
     <div className='min-h-screen flex items-center justify-center'>
     <img className='md:w-full lg:w-1/2' src={not_found} alt={not_found} />
     </div>
    </main>
  );
};

export default NotFound;
