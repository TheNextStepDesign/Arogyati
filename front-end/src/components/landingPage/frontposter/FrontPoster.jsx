

const FrontPoster = ({img}) => {
  return (
    <div className='w-[100%]  z-10' >
        <img   className='object-cover w-[100%]'  src={img} alt="front-poster" />
    </div>
  )
}

export default FrontPoster