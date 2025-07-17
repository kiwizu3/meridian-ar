import { Locale } from '@/i18n-config';
import { ReportHeaderSection, ConqueringSection } from '../../../components/report';
import './report.css';

export default async function ReportPage({
  params = { lang: 'en' },
}: Readonly<{
  params?: { lang: Locale };
}>) {
  return (
    <div className="min-h-screen">
      <ReportHeaderSection />
      <ConqueringSection />
    </div>
  );
}
