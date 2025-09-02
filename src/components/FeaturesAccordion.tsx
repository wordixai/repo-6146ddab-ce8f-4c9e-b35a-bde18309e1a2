import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const accordionItems = [
  {
    id: '01',
    title: 'Global tax compliance',
    content: "We're your merchant of record. That means we handle payments, merchant fees, fraud and sales tax without you lifting a finger.",
    mockup: (
      <div className="p-6 rounded-lg w-full relative space-y-8">
        <div className="border bg-neutral-900/40 rounded-lg shadow-md p-4 relative">
          <div className="flex items-center">
            <img 
              alt="User Avatar" 
              width="32" 
              height="32" 
              className="w-8 h-8 rounded-full mr-3"
              src="https://www.creem.io/_next/image?url=%2Falec-headshot.jpeg&w=64&q=75"
            />
            <div>
              <div className="text-sm text-white">Alec Erasmus purchased</div>
              <div className="text-xs text-gray-300">AI Headshots Plus</div>
            </div>
            <div className="ml-auto text-green-400 font-medium">+$35.00</div>
          </div>
        </div>
        
        <div className="border bg-neutral-900/40 rounded-lg p-4 relative">
          <div className="text-center font-medium mb-2 text-white">Merchant of Record</div>
          <div className="space-y-2">
            {[
              'Global Payment Gateway',
              'Tax Collection + Remittance', 
              'Payment Processing',
              'Refunds + Chargebacks',
              'Risk Analysis + Fraud'
            ].map((item, index) => (
              <div key={index} className="flex items-center text-sm text-gray-200">
                <div className="w-4 h-4 rounded-full bg-gray-700 text-green-400 flex items-center justify-center mr-2">✓</div>
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative flex justify-center">
          <div className="absolute bottom-0 translate-y-1/2 w-6 h-6 flex items-center justify-center z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/10 rounded-full backdrop-blur-sm border border-white/10 opacity-80"></div>
            <div className="absolute inset-0 animate-pulse bg-primary/5 rounded-full backdrop-blur-sm"></div>
            <div className="text-white/90 relative z-20">↓</div>
          </div>
        </div>
        
        <div className="border bg-neutral-900/40 rounded-lg p-4 relative">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-neutral-800 rounded mr-3 flex items-center justify-center">
              <div className="w-4 h-4 text-white">🏦</div>
            </div>
            <div>
              <div className="text-sm text-white">Bank Payout Processed</div>
              <div className="text-xs text-gray-300">JPMORGAN **** 4213</div>
            </div>
            <div className="ml-auto text-green-400 font-medium">+$33.35</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'Borderless SaaS payments',
    content: 'Accept payments from anywhere in the world with localized payment methods and currency support.'
  },
  {
    id: '03', 
    title: 'Instant payment methods',
    content: 'Support for all major payment methods including credit cards, digital wallets, and bank transfers.'
  },
  {
    id: '04',
    title: 'Trials & discount codes', 
    content: 'Flexible pricing options with trial periods and promotional codes to boost conversions.'
  },
  {
    id: '05',
    title: 'A.I. fraud prevention',
    content: 'Advanced machine learning algorithms protect your business from fraudulent transactions.'
  },
  {
    id: '06',
    title: 'Failed payment recovery',
    content: 'Automated retry logic and customer communication to recover failed payments.'
  }
];

const FeaturesAccordion = () => {
  const [activeItem, setActiveItem] = useState('01');

  return (
    <div className="max-w-7xl mx-auto text-white relative z-10">
      <div className="mb-16 text-center">
        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight mb-4">
          Smooth International Sales
        </h2>
        <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto text-center font-normal dark:text-muted-dark text-gray-300">
          Everything you need to handle payments for your SaaS business
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Accordion */}
        <div className="flex flex-col">
          {accordionItems.map((item, index) => (
            <div key={item.id}>
              <div className="transition hover:!text-primary duration-200 hover:bg-neutral-900/50 cursor-pointer border-gray-800 last:border-0 overflow-hidden rounded-sm">
                <button 
                  className="w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none"
                  onClick={() => setActiveItem(activeItem === item.id ? '' : item.id)}
                >
                  <div className="flex items-center py-3">
                    <span 
                      className={`text-sm mr-3 transition-all duration-200 ${
                        activeItem === item.id 
                          ? 'text-primary transform scale-110 opacity-100' 
                          : 'text-primary opacity-80'
                      }`}
                    >
                      {item.id}
                    </span>
                    <h3 className={`text-xl font-medium relative ${
                      activeItem === item.id ? '!text-primary' : ''
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  <div 
                    className="transition-transform duration-200"
                    style={{ 
                      transform: activeItem === item.id ? 'rotate(90deg)' : 'none',
                      color: activeItem === item.id ? 'hsl(var(--creem-peach))' : 'inherit'
                    }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
                
                {activeItem === item.id && (
                  <div className="overflow-hidden" style={{ height: 'auto', opacity: 1 }}>
                    <div className="py-4 px-4 pr-6">
                      <p className="text-gray-300 relative">{item.content}</p>
                      {item.mockup && (
                        <div className="md:hidden relative overflow-hidden mt-6 bg-neutral-900/40 border border-neutral-800/40 rounded-lg p-4">
                          {item.mockup}
                          <div className="absolute w-full h-full squarePattern top-0 left-0"></div>
                          <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBD98,_#FFA477)] rounded-full blur-[100px] opacity-10 z-20"></div>
                          <div className="absolute -bottom-52 -right-52 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_#FFA477,_#FFBD98)] rounded-full blur-[100px] opacity-15 z-20"></div>
                          <div className="absolute top-0 w-[80%] h-64 bg-gradient-to-b from-white/20 to-transparent blur-2xl z-20"></div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {index < accordionItems.length - 1 && (
                <div className="flex justify-center">
                  <div className="shrink-0 bg-border h-[1px] w-11/12"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mockup Display for Desktop */}
        <div className="absolute p-4 md:flex items-center justify-center overflow-hidden hidden h-[608px] top-[10.3rem] right-0 left-1/2 bg-neutral-900/60 border border-primary/20 opacity-80 rounded-lg">
          <img 
            alt="Browser Actions Mockup" 
            width="45" 
            height="11" 
            className="absolute top-8 left-8 hidden md:block"
            src="https://www.creem.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrowser-actions-mockup.1fab99ff.svg&w=96&q=75"
          />
          <div className="absolute w-full h-full squarePattern"></div>
          <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBD98,_#FFA477)] rounded-full blur-[100px] opacity-10 z-20"></div>
          <div className="absolute -bottom-52 -right-52 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_#FFA477,_#FFBD98)] rounded-full blur-[100px] opacity-15 z-20"></div>
          <div className="absolute top-0 w-[80%] h-64 bg-gradient-to-b from-white/20 to-transparent blur-2xl z-20"></div>
          
          <div className="hidden md:block cursor-default w-full">
            <div className="relative z-10">
              {accordionItems[0].mockup}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAccordion;