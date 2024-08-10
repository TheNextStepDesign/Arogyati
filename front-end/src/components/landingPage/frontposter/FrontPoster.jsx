

const FrontPoster = ({img,img2}) => {
  return (
    <div className='w-[100%]   z-10 ' >
        <img   className='object-cover w-[100%]  hidden md:block'  src={img} alt="front-poster-web" />
        <img   className='object-cover w-[100%]  md:hidden'  src={img2} alt="front-poste-mobr" />
    </div>
  )
}

export default FrontPoster