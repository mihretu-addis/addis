import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 55%, #0f172a 100%)',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: 'rgba(255,255,255,0.12)',
              border: '2px solid rgba(251,191,36,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
              color: '#fbbf24',
            }}
          >
            {'>_'}
          </div>
          <div style={{ display: 'flex', fontSize: 56, fontWeight: 800 }}>
            <span>Addis</span>
            <span style={{ color: '#fbbf24' }}>Tech</span>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 44, fontWeight: 700, maxWidth: 900, lineHeight: 1.2 }}>
          {siteConfig.tagline}
        </div>
        <div style={{ display: 'flex', fontSize: 26, marginTop: 28, opacity: 0.85, maxWidth: 860 }}>
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size },
  );
}
