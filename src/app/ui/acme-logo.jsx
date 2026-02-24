import Link from 'next/link';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (

    <a className="flex items-center gap-2 group">
      <div className={`${lusitana.className} text-white`}>
        <DocumentTextIcon className="h-12 w-12 rotate-[15deg]" />
      </div>
      <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-100 transition-colors">
        Factura <span className="font-light">App</span>
      </span>
    </a>

  );
}