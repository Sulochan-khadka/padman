const Navbar = () => {
  return (
    <div className='flex align-middle justify-between px-4'>
      <div>logo</div>
      {/* container */}
      <div className='flex justify-center align-middle px-8'>
        <div className='px-4'>Sanitary Pads</div>
        <div className='px-4'>Our products</div>
        <div className='px-4'>Shop By Concern</div>
        <div className='px-4'>Combos & Extras</div>
        <div className='px-4'>Refer and Earn</div>
        <div className='px-4'>Blog</div>
      </div>
      {/* login and chat */}
      <div className='flex align-middle justify-center'>
        <div className='px-4'>login</div>
        <div>chat</div>
      </div>
    </div>
  );
};

export default Navbar;
