const Binance = require('binance-api-node').default;
const client = Binance({
  apiKey: 'KKK',
  apiSecret: 'SSS',
});

const ass = async () => {
let accountInfo = await client.accountInfo();
for (let k = 0; k < 100; k++)   // is it possible get "asset" `s length?
	{	 
	 let symbol = accountInfo.balances[k].asset;
	 if (symbol == "USDT")      // use "==" or "===" not "="
	 {
		 console.log(k, symbol);
		 process.exit()
	}}}
	
(async function main(){
	
	while(true){
try {
	await ass()	
	}
	catch (e) {}
	}})();