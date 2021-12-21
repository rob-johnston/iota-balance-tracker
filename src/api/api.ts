import { SingleNodeClient } from '@iota/iota.js';

const client = new SingleNodeClient("https://chrysalis-nodes.iota.org/")

export async function fetchSingleBalance(address: string) {
	const res = await client.address(address);
	return res.balance;
}
