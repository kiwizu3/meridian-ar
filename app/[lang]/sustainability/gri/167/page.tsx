import Image from 'next/image';

export default function CorporateInitiatives() {
  // Content data structure
  interface ContentItem {
    type: string;
    title?: string;
    text?: string | string[];
    items?: {
      title: string;
      content: string;
    }[];
    chart?: {
      image: any;
      alt: string;
      caption?: string;
    };
    columns?: {
      title: string;
      content: string;
      chart?: {
        image: any;
        alt: string;
        caption?: string;
      };
    }[];
    list?: {
      title?: string;
      items: string[];
    };
    image?: {
      src: any;
      alt: string;
      caption?: string;
    };
  }

  // Main content with images added
  const initiativesContent: ContentItem[] = [
    {
      type: 'header',
      title: 'VICTORIOUS 2025',
      text: 'Empowering Success!',
    },
    {
      type: 'image',
      image: {
        src: '',
        alt: 'Victorious 2025 event at LBF Auditorium',
        caption: 'Dr. Philip Nehri speaking at the Victorious 2025 event',
      },
    },
    {
      type: 'section',
      text: [
        "'Victorious 2025: Empowering Success!' took centre stage at the LBF Auditorium on 8 January, led by motivational speaker Dr. Philip Nehri.",
        'Staff gained powerful insights into personal and professional growth through engaging sessions. The event set a motivational tone for the year, inspiring employees to pursue excellence and success.',
      ],
    },
    {
      type: 'header',
      title: "'A LEAP FORWARD' - WELCOMING OUR NEW TALENT",
    },
    {
      type: 'image',
      image: {
        src: '',
        alt: 'New employee orientation program',
        caption: 'New recruits participating in the athlete-themed orientation',
      },
    },
    {
      type: 'section',
      text: [
        "With the energy of an athlete at the starting block, our 'A Leap Forward' orientation programmes set the pace for new recruits, turning their first steps into powerful strides. Blending inspiration with innovation, the athlete-themed sessions offered a refreshing and immersive experience, embodying our culture of excellence and momentum.",
        'In FY 2024/25, we hosted 11 dynamic programmes, including specially tailored Tamil-medium sessions for our Northern and Eastern regional teams ensuring every team member starts their race at LBF with confidence, clarity, and connection.',
      ],
    },
    {
      type: 'section',
      text: ['GRI: 2-25'],
    },
    {
      type: 'header',
      title: '12. ETHICAL BUSINESS CONDUCT',
    },
    {
      type: 'section',
      text: [
        'Maintaining the highest ethical standards is crucial to our reputation and credibility. This commitment starts with leadership setting the tone for integrity and diligently overseeing adherence across the organisation.',
      ],
    },
    {
      type: 'image',
      image: {
        src: '',
        alt: 'Ethics training session',
        caption: 'Employees participating in ethics training workshop',
      },
    },
    {
      type: 'section',
      title: 'Code of Conduct',
      text: [
        'Our Code provides clear guidelines for all employees, defining expected behaviour and responsibilities in stakeholder interactions. It is introduced to new recruits during orientation to ensure alignment from the start.',
      ],
    },
    {
      type: 'section',
      title: 'Ethics Training',
      text: [
        'Regular training programmes reinforce our ethical principles and raise employee awareness of potential violations. In the year under review, specific ethics training delivered as part of the orientation programme. Complementing this education, our integrated approach to fostering an ethical culture includes providing multiple channels for employees to confidentially raise concerns regarding conflicts of interest or perceived ethical violations.',
      ],
    },
    {
      type: 'section',
      title: 'Reporting Mechanisms',
      text: [
        'We maintain multiple channels enabling employees to voice concerns about potential conflicts of interest or ethical breaches. Furthermore, a dedicated Whistleblower Policy allows for anonymous reporting of suspected fraud, financial irregularities, or misappropriation.',
      ],
    },
  ];

  return (
    <div className="py-24 container px-5 lg:px-0">
      <div className="bg-[#0A3D5F] lg:p-8 p-4 md:p-6 rounded-lg">
        <div className="px-4 md:pl-0 md:pr-2 custom-scrollbar h-[654px] overflow-auto flex flex-col">
          <div className="bg-[#fcf7ef] rounded-lg p-6">
            {initiativesContent.map((item, index) => (
              <div key={index} className="mb-8 last:mb-0">
                {/* Header Section */}
                {item.type === 'header' && (
                  <>
                    <h1 className="text-2xl font-bold mb-2 text-[#0A3D5F]">
                      {item.title}
                    </h1>
                    {item.text && (
                      <h2 className="text-xl font-bold mb-4 text-[#F3A847]">
                        {item.text}
                      </h2>
                    )}
                  </>
                )}

                {/* Image Section */}
                {item.type === 'image' && item.image && (
                  <div className="my-6">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                      />
                    </div>
                    {item.image.caption && (
                      <p className="text-xs text-center mt-2 text-black italic">
                        {item.image.caption}
                      </p>
                    )}
                  </div>
                )}

                {/* Section with Text */}
                {item.type === 'section' && (
                  <>
                    {item.title && (
                      <h2 className="text-xl font-bold mb-4 text-[#F3A847] border-b border-[#F3A847] pb-1">
                        {item.title}
                      </h2>
                    )}
                    {Array.isArray(item.text) ? (
                      item.text.map((paragraph, i) => (
                        <p key={i} className="text-sm text-black mb-3">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-black">{item.text}</p>
                    )}
                  </>
                )}

                {/* Columns Section */}
                {item.type === 'columns' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {item.columns?.map((column, i) => (
                      <div key={i} className="bg-[#daa765] p-4 rounded-lg">
                        <h3 className="font-bold text-[#0A3D5F] mb-2">
                          {column.title}
                        </h3>
                        {column.content && (
                          <div className="text-sm text-black mb-3 whitespace-pre-line">
                            {column.content}
                          </div>
                        )}
                        {column.chart && (
                          <div className="mt-4">
                            <div className="relative w-full h-48 rounded-lg overflow-hidden">
                              <Image
                                src={column.chart.image}
                                alt={column.chart.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                              />
                            </div>
                            {column.chart.caption && (
                              <p className="text-xs text-center mt-2 text-black">
                                {column.chart.caption}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
