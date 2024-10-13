import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const days = searchParams.get('days') || '10';
  const hours = searchParams.get('hours') || '23';
  const mints = searchParams.get('mints') || '40';
  const seconds = searchParams.get('seconds') || '08';

  const fontPath = path.join(process.cwd(), 'public', 'Helvetica-Bold.ttf');
  const fontData = fs.readFileSync(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 130,
          color: '#3A2F2F',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          letterSpacing: '-0.05em',
        }}>
        <img
          width='1200'
          height='675'
          src='https://media.graphassets.com/JZha5BzSQDKCjhgAGwNx'
        />
        <div style={{ position: 'absolute', top: '38%', left: '52%' }}>
          {mints}
        </div>
        <div style={{ position: 'absolute', top: '42%', left: '16%' }}>
          {days}
        </div>
        <div style={{ position: 'absolute', top: '46%', left: '35%' }}>
          {hours}
        </div>
        <div style={{ position: 'absolute', top: '38%', left: '70%' }}>
          {seconds}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 675,
      fonts: [
        {
          name: 'Helvetica-Bold',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
