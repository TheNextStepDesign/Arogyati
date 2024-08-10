const WhatsappRipple = () => {
     const href = 'https://wa.me/919503504241?text=Hello, I would like to know more about your projects.'
    return (
      <div className="flex justify-center items-center ">
        <a className="relative w-[60px] h-[60px] " target="_blank" rel="noopener noreferrer" href={href}>
          <div className="absolute inset-0 bg-green-500 rounded-full"></div>
          <img 
            src="/images/whatsapp.png" 
            alt="WhatsApp Logo" 
            className="absolute inset-0 w-full h-full rounded-full object-cover"
          />
        </a>
      </div>
    );
  };
  
  export default WhatsappRipple;