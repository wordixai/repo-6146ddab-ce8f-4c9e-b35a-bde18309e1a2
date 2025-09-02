import { ShoppingCart, Youtube, Code, Zap } from 'lucide-react';

const features = [
  { icon: ShoppingCart, text: 'Global Sales Tax' },
  { icon: ShoppingCart, text: 'Merchant of Record' },
  { icon: ShoppingCart, text: 'Fraud Protection' },
  { icon: Youtube, text: 'Video Tutorials' },
  { icon: Code, text: 'Well Documented API' },
  { icon: Zap, text: 'Easy to Integrate' },
];

const ScrollingFeatures = () => (
  <div className="scroller relative z-20 group max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
    <div className="flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll [animation-play-state:running] group-hover:[animation-play-state:paused]">
      {Array.from({ length: 2 }).map((_, setIndex) => (
        <div key={setIndex} className="flex space-x-4 flex-shrink-0 mb-4 relative z-40">
          {features.map((feature, index) => (
            <span key={index} className="feature-badge">
              <feature.icon className="w-6 h-6" />
              <span className="text-white">{feature.text}</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const FeatureSection = () => {
  return (
    <div className="pt-32">
      <div className="relative z-20">
        <div className="bg-neutral-800 border-neutral-700 rounded-[32px] relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-black scale-[1.1] pointer-events-none"></div>
          <div className="p-2 bg-black border-neutral-700 rounded-[24px] rounded-b-none">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
              
              {/* Main Feature Card */}
              <section className="mx-auto w-full feature-card col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]">
                <div className="h-full px-4 py-20 sm:px-10">
                  <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 bg-noise [mask-image:radial-gradient(#fff,transparent,75%)]"></div>
                  <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary">
                      The future of work needs new financial tools
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                      Small teams are achieving what used to require 150+ people.<br /><br />
                      We're building the financial infrastructure to power this revolution.
                    </p>
                  </div>
                  <ScrollingFeatures />
                  <img 
                    alt="Code demo" 
                    width="400" 
                    height="400" 
                    className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
                    src="https://www.creem.io/_next/image?url=%2Fcode-pretty.png&w=828&q=75"
                  />
                </div>
              </section>

              {/* Merchant of Record Card */}
              <section className="mx-auto w-full feature-card col-span-1 min-h-[300px]">
                <div className="h-full px-4 py-20 sm:px-10">
                  <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 bg-noise [mask-image:radial-gradient(#fff,transparent,75%)]"></div>
                  <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary">
                    Global Merchant of Record
                  </h2>
                  <div className="mt-4 max-w-[26rem] text-left text-base/6 text-white">
                    <p>Focus on your product, not on bureaucracy. We handle the heavy lifting of <strong>Tax Compliance.</strong></p>
                    <div className="mt-6 bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-neutral-200">Tax Report 2025</h3>
                        <span className="px-2 py-1 text-xs font-medium text-emerald-500 bg-emerald-500/10 rounded-full">
                          Submitted
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-400">VAT (EU)</span>
                          <span className="text-sm font-medium text-white">€2,450.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-neutral-400">Sales Tax (US)</span>
                          <span className="text-sm font-medium text-white">$3,120.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Global Presence Card */}
              <section className="mx-auto w-full rounded-2xl overflow-hidden col-span-1 lg:col-span-3 bg-black min-h-[300px] relative border-b-0">
                <div className="feature-card h-full">
                  <div className="h-full px-4 py-20 sm:px-10">
                    <div className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 bg-noise [mask-image:radial-gradient(#fff,transparent,75%)]"></div>
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                    
                    <div className="relative w-full h-full py-8">
                      {/* Glow effects */}
                      <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBE98,_#FFA477)] rounded-full blur-[100px] opacity-20 z-20"></div>
                      <div className="absolute -bottom-52 -right-52 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 z-20"></div>
                      <div className="absolute top-0 w-[80%] h-64 bg-gradient-to-b from-[#FFBE98]/20 to-transparent blur-2xl z-20"></div>
                      
                      <div className="relative grid md:grid-cols-2 gap-12 z-30 h-full">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                              <span className="bg-gradient-to-r from-[#FFBE98] to-[#FFA477] bg-clip-text text-transparent">
                                Global Presence,
                              </span><br />
                              <span className="text-white">Local Excellence</span>
                            </h2>
                            <p className="mt-4 text-gray-300 text-lg">
                              Empowering teams across the globe to scale without boundaries
                            </p>
                          </div>
                          
                          <div className="flex items-center space-x-5 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                            <div className="w-10 h-10 text-[#FFBE98]">🌍</div>
                            <div>
                              <h3 className="font-semibold text-xl text-white">Borderless Operations</h3>
                              <p className="text-gray-300">Scale your business globally with seamless integration</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                              <div className="text-3xl font-bold text-[#FFBE98]">100+</div>
                              <div className="text-gray-300 mt-1">Countries Supported</div>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                              <div className="text-3xl font-bold text-[#FFBE98]">24/7</div>
                              <div className="text-gray-300 mt-1">Global Support</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Country Flags Grid */}
                        <div className="relative h-full flex items-center">
                          <div className="grid grid-cols-3 gap-4 w-full">
                            {[
                              { code: 'us', name: 'United States' },
                              { code: 'br', name: 'Brazil' },
                              { code: 'ca', name: 'Canada' },
                              { code: 'de', name: 'Germany' },
                              { code: 'in', name: 'India' },
                              { code: 'gb', name: 'United Kingdom' },
                              { code: 'cn', name: 'China' },
                              { code: 'jp', name: 'Japan' },
                              { code: 'kr', name: 'South Korea' },
                              { code: 'sg', name: 'Singapore' },
                              { code: 'au', name: 'Australia' },
                              { code: 'za', name: 'South Africa' },
                            ].map((country, index) => (
                              <div key={country.code} className="group relative">
                                <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                                  <img 
                                    src={`https://flagcdn.com/w320/${country.code}.png`}
                                    alt={`${country.name} flag`}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                                  <span className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 text-white text-xs text-center font-medium">
                                    {country.name}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;