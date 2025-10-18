import { Button } from "@/components/ui/button";
import TradingViewWidget from "@/components/TradingViewWidget";
import {
   HEATMAP_WIDGET_CONFIG,
   MARKET_DATA_WIDGET_CONFIG,
   MARKET_OVERVIEW_WIDGET_CONFIG,
   TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

const SCRIPT_SRC = "https://s3.tradingview.com/external-embedding/";

const Home = () => {
   return (
      <div className="home-wrapper flex min-h-screen">
         <section className="home-section grid w-full">
            <div className="md:col-span-1 xl:col-span-1">
               <TradingViewWidget
                  title="Stock Market Prices"
                  config={MARKET_OVERVIEW_WIDGET_CONFIG}
                  scriptSrc={`${SCRIPT_SRC}embed-widget-market-overview.js`}
                  height={600}
                  className="custom-chart"
               />
            </div>
            <div className="md:col-span-1 xl:col-span-1">
               <TradingViewWidget
                  title="Heat Map"
                  config={HEATMAP_WIDGET_CONFIG}
                  scriptSrc={`${SCRIPT_SRC}embed-widget-stock-heatmap.js`}
                  height={600}
                  className="custom-chart"
               />
            </div>
         </section>
         <section className="home-section grid w-full">
            <div className="md:col-span-1 xl:col-span-1">
               <TradingViewWidget
                  title="Top Stories"
                  config={TOP_STORIES_WIDGET_CONFIG}
                  scriptSrc={`${SCRIPT_SRC}embed-widget-timeline.js`}
                  height={600}
                  className="custom-chart"
               />
            </div>
            <div className="md:col-span-1 xl:col-span-1">
               <TradingViewWidget
                  title="Market Quotes"
                  config={MARKET_DATA_WIDGET_CONFIG}
                  scriptSrc={`${SCRIPT_SRC}embed-widget-market-quotes.js`}
                  height={600}
                  className="custom-chart"
               />
            </div>
         </section>
      </div>
   );
};
export default Home;
