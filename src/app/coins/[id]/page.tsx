"use client";
import { Suspense } from "react";
import { useCoinDetails } from "@/app/hooks/useCoinDetails";
import { CoinPage } from "@/app/components/CoinPage";

export default function Page({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useCoinDetails(params.id);
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-24 w-24"></div>
        </div>
      }
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-24 w-24"></div>
        </div>
      ) : error ? (
        <div>Error loading coin details: {error.message}</div>
      ) : (
        <CoinPage promise={data} />
      )}

    </Suspense>
  );
}