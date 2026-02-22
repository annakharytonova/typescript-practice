interface ConvertCurrencyParams {
  amount: number;
  currency: Currency;
}

type Currency = "USD" | "EUR" | "UAH";
function convertCurrency({ amount, currency }: ConvertCurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 40, currency: "UAH" });
