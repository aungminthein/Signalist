import { useEffect, useRef } from "react";

// interface TradingViewWidgetProps {
//    scriptSrc: string;
//    config: Record<string, unknown>;
//    heigh: number;
// }

const UseTradingViewWidget = (
   scriptSrc: string,
   config: Record<string, unknown>,
   height: 600,
) => {
   const widgetRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!widgetRef.current) return;
      if (widgetRef.current.dataset.loaded) return;
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.innerHTML = JSON.stringify(config);

      widgetRef.current.appendChild(script);
      widgetRef.current.dataset.loaded = "true";
   }, [scriptSrc, config, height]);

   return widgetRef;
};
export default UseTradingViewWidget;
