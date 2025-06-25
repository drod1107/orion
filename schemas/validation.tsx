// /schemas/validation.ts
import { z } from "zod";

// Budget validation schemas
export const createBudgetCategorySchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  budget: z.number().positive("Budget must be positive"),
});

export const updateBudgetCategorySchema = createBudgetCategorySchema.partial();

export const budgetCategoryResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  budget: z.number(),
  spent: z.number(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Transaction validation schemas
export const createTransactionSchema = z.object({
  description: z.string().min(1, "Description is required").max(500),
  amount: z.number().refine((val) => val !== 0, "Amount cannot be zero"),
  date: z.coerce.date(),
  accountId: z.string().optional(),
  budgetCategoryId: z.string().optional(),
  transactionCategoryId: z.string().optional(),
});

export const updateTransactionSchema = createTransactionSchema.partial();

export const transactionFiltersSchema = z.object({
  budgetCategoryId: z.string().optional(),
  transactionCategoryId: z.string().optional(),
  accountId: z.string().optional(),
  dateFrom: z.coerce.date().optional(),
  dateTo: z.coerce.date().optional(),
  amountMin: z.number().optional(),
  amountMax: z.number().optional(),
  searchTerm: z.string().max(100).optional(),
});

// Account validation schemas
export const createBankAccountSchema = z.object({
  name: z.string().min(1, "Account name is required").max(100, "Name too long"),
  type: z.enum(["CHECKING", "SAVINGS", "CREDIT"]),
  balance: z.number(),
  institutionName: z.string().max(100, "Institution name too long").optional(),
  plaidAccountId: z.string().optional(),
});

export const updateBankAccountSchema = createBankAccountSchema.partial();

// User validation schemas
export const updateUserSchema = z.object({
  firstName: z.string().max(50, "First name too long").optional(),
  lastName: z.string().max(50, "Last name too long").optional(),
});

// Transaction category validation schemas
export const createTransactionCategorySchema = z.object({
  name: z.string().min(1, "Name is required").max(50, "Name too long"),
  color: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, "Invalid hex color")
    .optional(),
  icon: z.string().max(50, "Icon name too long").optional(),
});

// Assistant validation schemas
export const createAssistantQuerySchema = z.object({
  query: z.string().min(1, "Query cannot be empty").max(1000, "Query too long"),
});

// Notification validation schemas
export const createNotificationSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(500, "Message too long"),
  type: z.enum(["INFO", "SUCCESS", "WARNING", "ERROR"]),
});

// API common schemas
export const paginationParamsSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  sortBy: z.string().optional(),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
});

// Chart data schemas
export const chartDataPointSchema = z.object({
  date: z.string(),
  amount: z.number(),
  label: z.string().optional(),
});

export const spendingTrendDataSchema = z.object({
  daily: z.array(chartDataPointSchema),
  weekly: z.array(chartDataPointSchema),
  monthly: z.array(chartDataPointSchema),
});

// Toast notification schema
export const toastNotificationSchema = z.object({
  id: z.string(),
  message: z.string().min(1).max(200),
  type: z.enum(["success", "error", "info"]),
  duration: z.number().positive().optional(),
});
