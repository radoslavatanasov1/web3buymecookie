'use client'
import React, { useState } from "react";  // Import useState here
import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, TransactionButton, useActiveAccount, useContractEvents, useReadContract } from "thirdweb/react"
import { prepareContractCall, toWei } from "thirdweb";
import { contract } from "../utils/contract";
import { timeStamp } from "console";

export const BuyMeCoffee = () => {
    const account = useActiveAccount();

    const [tipAmount, setTipAmount] = useState(0);
    const [message, setMessage] = useState("");

    const { 
        data: totalCoffees, 
        refetch: refetchTotalCoffees 
    } = useReadContract({
        contract: contract,
        method: "getTotalCoffee",
    });
    const { 
        data: contractEvents, 
        refetch: refetchContractEvents 
    } = useContractEvents({ 
        contract: contract,
    });
    

    const truncateWalletAddress = (address: string) => {
        return `${address.slice(0,6)}...${address.slice(-4)}`;
    };

    const convertDate = (timestamp: bigint) => {
        const timestampNumber = Number(timestamp);
        return new Date(timestampNumber * 1000).toLocaleString();
    };


    if(account){
        return(
            <div className="border border-[#252525] p-8 rounded-[6px] w-[500px]">

                <div className="text-center mb-4">
                <ConnectButton
                    
                    client={client}
                    chain={chain}
                />
                </div>
                <div className="flex flex-col">
                    <label  className="text-base">Tip Amount</label>
                    <p className="mb-1 text-[10px] text-[#888]">*Must be greater than 0</p>
                    <input
                        className="p-2 mt-2 border-0 mb-4 bg-gray-800 text-white text-white border-0 rounded-md"
                        type="number"
                        value={tipAmount}
                        onChange={(e) => setTipAmount(Number(e.target.value))}
                        step={0.01}
                    />
                    <label className="mb-2">Message</label>
                    <input  className="mb-2 p-2 rounded-md bg-gray-800"
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter a message for a cookie..."
                        
                    />
                </div>
                {message && tipAmount > 0 &&(
                    <div className=" mt-2 text-center text-white text-xs">
                    <TransactionButton className="bg-royalblue"
                      
                      transaction={() =>
                        prepareContractCall({
                          contract: contract,
                          method: "BuyMeAcoffee",
                          params: [message],
                          value: BigInt(toWei(tipAmount.toString())),
                        })
                      }
                      onTransactionConfirmed={() => {
                        alert("Thank you for the Cookie");
                        setTipAmount(0);
                        setMessage("");
                        refetchTotalCoffees();
                      }}
                    >
                      Buy A Cookie
                    </TransactionButton>
                    </div>
                )
                
                }
                <div>
                    <p className="mt-2">Recent Cookies:</p>
                    {contractEvents && contractEvents.length > 0 &&(
                        [...contractEvents.reverse().map((event, index) =>(
                            <div key={index} className="flex flex-col p-4 my-4 bg-[#151515] rounded-[6px]">
                                <div className="flex flex-row justify-between">
                                    <p className="text-[12px] text-[#888] mb-2">
                                        {/* @ts-ignore */}
                                        {truncateWalletAddress(event.args.sender)}
                                    </p>
                                    <p className="text-[12px] text-[#888]">
                                        {/* @ts-ignore */}
                                        {convertDate(event.args.timestamp)}
                                    </p>
                                </div>
                                <p className="text-[#888]">
                                    {/* @ts-ignore */}
                                    {event.args.message}
                                </p>
                            </div>
                        ))]
                    )}
                </div>
            </div>
        )

    }

}