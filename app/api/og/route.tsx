import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const days = searchParams.get('days') || '10';
  const hours = searchParams.get('hours') || '23';
  const mints = searchParams.get('mints') || '40';
  const seconds = searchParams.get('seconds') || '08';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: '#3A2F2F',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <img
          width='1200'
          height='675'
          src='https://media.graphassets.com/JZha5BzSQDKCjhgAGwNx'
        />
        <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
          {days}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
    }
  );
}
