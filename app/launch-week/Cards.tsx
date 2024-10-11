import Card1 from '@/app/launch-week/cards/Card1';
import Card2 from '@/app/launch-week/cards/Card2';
import Card3 from '@/app/launch-week/cards/Card3';

const Cards = () => {
  return (
    <div className='container relative z-20 mx-auto max-w-[86%] xl:max-w-[90%]'>
      <ul className='flex flex-col gap-y-[4rem] lg:grid lg:grid-cols-3 lg:gap-x-[7%]'>
        <Card1 />
        <Card2 />
        <Card3 />
      </ul>
    </div>
  );
};

export default Cards;
