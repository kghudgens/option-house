export class StockQuote {
    symbol: string;
    currentPrice: number;
    high: number;
    low: number

    constructor(symbol: string, currentPrice: number, high: number, low: number){
        this.symbol = symbol;
        this.currentPrice = currentPrice;
        this.high = high;
        this.low = low;
    }
}
