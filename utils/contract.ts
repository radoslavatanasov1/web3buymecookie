import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";
import { chain } from '../src/app/chain';
import { client } from '../src/app/client';



const contractAddress = "0x274BB5399Df07FF4b3e9b0FD1049Db9123c26094";


export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: contractABI,
})