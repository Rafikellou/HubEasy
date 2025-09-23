import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hubeasy.fr'),
  alternates: {
    canonical: 'https://hubeasy.fr/fr',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootRedirect() {
  redirect('/fr', 'replace');
}



