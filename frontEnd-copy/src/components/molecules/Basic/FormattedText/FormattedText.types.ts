export interface FormattedTextProps {
    page: string;
    textKey: string;
    formatters?: {
        start?: number;
        end?: number;
        className?: string;
    }[];
    defaultFontSize: string;
}