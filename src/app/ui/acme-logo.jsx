import { DocumentCurrencyDollarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row gap-x-4 items-center leading-none text-white`}
    >
      <DocumentCurrencyDollarIcon className="h-20 w-20 rotate-[15deg]" />
      <p className=" text-center text-[10px]">FactuWhirpool</p>
    </div>
  );
}
