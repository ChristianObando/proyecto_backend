import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';

export default function Form({ customers }) {
  return (
    <form action={createInvoice}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <select
            id="customer"
            name="customerId"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
            required
          >
            <option value="">Select a customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        {/* Travel Origin */}
        <div className="mb-4">
          <label htmlFor="origin" className="mb-2 block text-sm font-medium">
            Travel Origin
          </label>
          <input
            id="origin"
            name="origin"
            type="text"
            placeholder="City / Country"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
          />
        </div>

        {/* Travel Destination */}
        <div className="mb-4">
          <label htmlFor="destination" className="mb-2 block text-sm font-medium">
            Travel Destination
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            placeholder="City / Country"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
          />
        </div>

        {/* Travel Dates */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="departureDate" className="mb-2 block text-sm font-medium">
              Departure Date
            </label>
            <input
              id="departureDate"
              name="departureDate"
              type="date"
              className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="returnDate" className="mb-2 block text-sm font-medium">
              Return Date
            </label>
            <input
              id="returnDate"
              name="returnDate"
              type="date"
              className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
            />
          </div>
        </div>

        {/* Passengers */}
        <div className="mb-4">
          <label htmlFor="passengers" className="mb-2 block text-sm font-medium">
            Number of Passengers
          </label>
          <input
            id="passengers"
            name="passengers"
            type="number"
            min="1"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
          />
        </div>

        {/* Transport Mode (fixed to Bus) */}
        <input type="hidden" name="transport" value="bus" />

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium">
            Service Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="Details of the travel package"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
          />
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Invoice Amount
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            placeholder="Enter amount"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
          />
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">Invoice Status</legend>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="status" value="pending" defaultChecked /> Pending
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="status" value="paid" /> Paid
            </label>
          </div>
        </fieldset>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}