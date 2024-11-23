type StockProps = {
    price: number;
    symbol: string;
  };
  
  export const Stock = ({ price, symbol }: StockProps) => {
    return (
      <div className="p-4 border">
        <h2>Stock Information</h2>
        <p>Symbol: {symbol}</p>
        <p>Price: ${price}</p>
      </div>
    );
  };
  