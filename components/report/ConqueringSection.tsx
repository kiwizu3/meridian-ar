import LionPawCircle from './LionPawCircle';
import DownloadPDFButton from './DownloadPDFButton';

export default function ConqueringSection() {
  return (
    <div className="bg-teal-700">
      {/* Conquering with Courage Section */}
      <section className="py-16 relative conquering-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white relative ml-[80px]">
            <div className="mb-8 bg-[#467643] rounded-[8px] flex items-center justify-center opacity-100 w-[580px] h-[183px] p-[24px]">
              <p className="font-sans font-normal text-[18px] leading-[27px] text-white m-0 flex items-center justify-center text-center w-[532px] h-[135px]">
                With a legacy spanning over 54 years in Sri Lanka's financial services sector, LB Finance PLC (LBF) is a leading Non-Banking Financial Institution (NBFI) in the country. The Company maintains an A-(lka) rating from Fitch Ratings Lanka Ltd., underscoring its financial strength and stability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center relative">
                <div className="z-10">
                  <LionPawCircle />
                </div>
                <div className="feature-card">
                  <span className="feature-text">Awards and accolades</span>
                </div>
              </div>
              <div className="flex items-center relative">
                <div className="z-10 lion-paw-offset">
                  <LionPawCircle />
                </div>
                <div className="feature-card">
                  <span className="feature-text">Non Financial Highlights</span>
                </div>
              </div>
              <div className="flex items-center relative">
                <div className="z-10">
                  <LionPawCircle />
                </div>
                <div className="feature-card">
                  <span className="feature-text">Financial Highlights</span>
                </div>
              </div>
              <div className="flex items-center relative">
                <div className="z-10 lion-paw-offset">
                  <LionPawCircle />
                </div>
                <div className="feature-card">
                  <span className="feature-text">Strategic Journey</span>
                </div>
              </div>
              <div className="col-span-2 flex items-center relative">
                <div className="z-10">
                  <LionPawCircle />
                </div>
                <div className="feature-card-wide">
                  <span className="feature-text">Key Attributes that gave LBF its sustainable competitive advantage in 2025</span>
                </div>
              </div>
              <div className="download-button-container">
                <DownloadPDFButton />
              </div>
            </div>
          </div>
          <div className="absolute right-image-container">
            <div className="absolute top-0 right-0 z-10">
              <img src="/images/report/conquering.png" alt="Conquering with Courage" className="w-full max-w-xs" />
            </div>
            <img 
              src="/images/report/mosaic_art_3.png" 
              alt="Mosaic Lion" 
              className="max-w-full h-auto object-contain opacity-100 mosaic-lion"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
