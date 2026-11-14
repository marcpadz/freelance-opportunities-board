export type ApplicationDetails = { instructions: string; email: string; emails: string[]; recipient: string; url: string; evidence: string; source: string; hasDetails: boolean };
export function cleanText(value?: unknown): string;
export function safeUrl(value?: unknown): string;
export function safeEmail(value?: unknown): string;
export function extractApplication(input?: { legacy?: string; description?: string; summary?: string; source?: string; explicit?: Partial<ApplicationDetails>; preserveInstructions?: boolean }): ApplicationDetails;
