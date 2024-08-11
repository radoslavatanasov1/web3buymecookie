import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { BuyMeCoffee } from "../../components/BuyMeCoffee";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start h-screen mt-8">

      <h1 className="mb-8 text-2xl font-bold">Buy Me A Cookie</h1>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <BuyMeCoffee/>
    </div>
  );
}
