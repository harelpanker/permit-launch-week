import Card1 from './cards/Card1';
import Card2 from './cards/Card2';

const Cards = () => {
  return (
    <div className='container relative z-20 mx-auto max-w-[86%] xl:max-w-[90%]'>
      <ul className='flex flex-col gap-y-[3rem] lg:grid lg:grid-cols-3 lg:gap-x-[7%]'>
        <Card1 />
        <Card1 />
        <Card1 />
      </ul>
    </div>
  );
};

export default Cards;
