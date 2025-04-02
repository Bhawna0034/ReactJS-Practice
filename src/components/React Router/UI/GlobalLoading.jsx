import React from 'react'
import { useNavigation } from 'react-router-dom';

const GlobalLoading = () => {
    const navigation = useNavigation();
    // console.log(navigation);
   
  return navigation.state === "loading"? (
    <div className='fixed top-0 left-0 bg-black text-white w-full p-[10px] text-center'>
      Loading...
    </div>
  ) : null;
}

export default GlobalLoading
