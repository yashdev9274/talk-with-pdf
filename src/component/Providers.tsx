"use client";

import { trpc } from "@/app/_trpc/client"
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
// import { absoluteUrl } from '@/lib/utils'

import { PropsWithChildren, useState } from "react"

const Providers = ({ children }: PropsWithChildren) => {

    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    // url: absoluteUrl("/api/trpc"),
                    url: "http://localhost:3000/api/trpc",

                })
            ]
        })
    )

    return (

        <trpc.Providers
            client={trpcClient}
            query={queryClient}
        >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Providers>
    )
}

export default Providers