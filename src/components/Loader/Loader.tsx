import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import s from './Loader.module.scss';
// import { useSelector } from 'react-redux';

export const Loader = () => {
  // const isLoading = useSelector((state) => state.content.isLoading);
  // const error = useSelector((state) => state.content.error);

  // if (isLoading) {
  return (
    <div>
      <div className={s.loader}>
        <MutatingDots
          height="100"
          width="100"
          color="#025FA7"
          secondaryColor="#FFD500"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

// if (error) {
//   return error;
// }
// };
