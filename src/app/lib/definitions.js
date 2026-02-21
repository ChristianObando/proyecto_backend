// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

// Note: Type definitions removed for JavaScript compatibility
// The types are documented below for reference:
// - User: { id, name, email, password }
// - Customer: { id, name, email, image_url }
// - Invoice: { id, customer_id, amount, date, status: 'pending' | 'paid' }
// - Revenue: { month, revenue }
// - LatestInvoice: { id, name, image_url, email, amount }
// - LatestInvoiceRaw: { id, name, image_url, email, amount }
// - InvoicesTable: { id, customer_id, name, email, image_url, date, amount, status }
// - CustomersTableType: { id, name, email, image_url, total_invoices, total_pending, total_paid }
// - FormattedCustomersTable: { id, name, email, image_url, total_invoices, total_pending, total_paid }
// - CustomerField: { id, name }
// - InvoiceForm: { id, customer_id, amount, status }
