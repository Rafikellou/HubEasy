"use client";

import {useMemo} from 'react';
import {useLocale} from 'next-intl';
import Link from 'next/link';
import {locales} from '@/i18n/config';
import {usePathname} from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const basePath = useMemo(() => {
    const current = pathname || '/';
    const stripped = current.replace(/^\/(fr|en)(?=\/|$)/, '');
    return stripped || '/';
  }, [pathname]);

  const otherLocales = useMemo(() => locales.filter(l => l !== locale), [locale]);

  return (
    <div className="flex items-center gap-2">
      {otherLocales.map(l => (
        <Link
          key={l}
          href={`/${l}${basePath}`}
          className="px-3 py-1 rounded-full border border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600 text-sm transition-colors"
          aria-label={`Switch language to ${l}`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
