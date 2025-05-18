export function formatCurrencyVND(amount: number): string {
    // Use Intl.NumberFormat for formatting
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return formatter.format(amount);
}