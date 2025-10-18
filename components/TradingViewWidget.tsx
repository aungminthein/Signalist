"use client";

// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";
import useTradingViewWidget from "@/lib/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";

interface TradingViewWidgetProps {
   scriptSrc: string;
   title: string;
   height: number;
   config: Record<string, unknown>;
   className?: string;
}

function TradingViewWidget({
   scriptSrc,
   title,
   height,
   config,
   className,
}: TradingViewWidgetProps) {
   const containerRef = useTradingViewWidget(scriptSrc, config, (height = 600));
   return (
      <div className="w-full">
         {title && (
            <h3 className="mb-5 text-center text-2xl font-semibold text-amber-700">
               {title}
            </h3>
         )}
         <div
            className={cn("tradingview-widget-container", className)}
            ref={containerRef}
         >
            {/*<div*/}
            {/*   className="tradingview-widget-container__widget"*/}
            {/*   style={{ height: "calc(100% - 32px)", width: "100%" }}*/}
            {/*></div>*/}
         </div>
      </div>
   );
}

export default memo(TradingViewWidget);
