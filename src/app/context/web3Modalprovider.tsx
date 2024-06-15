'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config, projectId } from "../../config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { ReactNode } from "react";
import { State, WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

if(!projectId) throw new Error('project id is not defined');

createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true,
    enableOnramp: true,
})


function Web3ModalProvider({children, initialState}: {
    children: ReactNode, initialState?: State
}){

    return (
        <WagmiProvider config={config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>

        </WagmiProvider>
    )

}


export default Web3ModalProvider

