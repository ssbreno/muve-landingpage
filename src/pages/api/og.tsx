import { ImageResponse } from '@vercel/og';
import { checkEnvUrl } from '../../lib/checkEnvUrl';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  const url = checkEnvUrl();
  const coverBg = `${url}assets/images/logo.svg`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'blue',
          fontFamily: 'Bebas Neue',
        }}
      >
        <div tw="flex items-center justify-center w-full h-full p-10 bg-[#212635]">
          <div tw="flex items-center justify-center  w-[150px] h-[150px] border-[3px] border-[#008B8B]">
            <img
              src={coverBg}
              alt=""
              style={{
                width: 130,
                height: 130,
                display: 'flex',
                objectFit: 'contain',
                borderRadius: '9999px',
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 630,
      height: 300,
      emoji: 'blobmoji',
      headers: {
        'Cache-Control': 's-maxage=86400',
      },
    },
  );
}
