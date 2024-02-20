export interface FormatValueProps {
    value: string|number;
    separator?: string;
    currency?: string;
    locale?: string;
    decimal?: true|false;
    maxFractionDigitis?: number;
}

export interface FormatDateProps {
    value: string|Date;
    location?: 'En'|'Br';
    format?: string|'DateHour'|'Date'|'Hour'|'Day'|'Mounth'|'Year';
}

export interface DiffDateProps {
    dateOne: string|Date;
    dateTwo: string|Date;
    type?: 'days'|'hours'|'milliseconds'|'minutes'|'months'|'seconds'|'weeks'|'years';
    incrementTotal?: number;
    notNegative?: true|false;
}

export function ReplaceAll(value: string, from: string, to: string): string;
export function FormatValue(props: FormatValueProps): string;
export function FormatFloat(value: string): string|number;
export function FormatPhone(value:string): string;
export function FormatCpfCnpj(value: string): string;
export function FormatPlate(value: string): string;
export function FormatDigitableLine(value: string): string;
export function FormatCep(value: string): string;
export function IsCpf(value: string): boolean;
export function IsCnpj(value: string): boolean;
export function IsCpfCnpj(value: string): boolean;
export function OnlyNumber(value: string): string;
export function FormatPassword(value: string, regex: RegExp): string;
export function FormatDate(props: FormatDateProps): string;
export function AddDateDays(date: string|Date, quantity?: number): Date;
export function AddDateMonths(date: string|Date, quantity?: number): Date;
export function AddDateYears(date: string|Date, quantity?: number): Date;
export function RemoveDateDays(date: string|Date, quantity?: number): Date;
export function RemoveDateMonths(date: string|Date, quantity?: number): Date;
export function RemoveDateYears(date: string|Date, quantity?: number): Date;
export function DiffDate(props: DiffDateProps): number;
export function IsMobile(): boolean;
export function ExtractUrlParams(url: string): object;
export function multiple(...args: number[]): number;
export function DateNow(type?: null|'first'|'last', format?: string): string|object;
export function IsLeapYear(year: number): boolean;