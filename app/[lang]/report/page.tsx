import { Locale } from '@/i18n-config';
import AmplifyingSection from '@/components/report/AmplifyingSection';
import TransformingEnvironment from '@/components/report/TransformingEnvironment';
import RespondingSection from '@/components/report/RespondingSection';
import EstablishingSection from '@/components/report/EstablishingSection';
import LeadingSection from '@/components/report/LeadingSection';
import EnvisioningSection from '@/components/report/EnvisioningSection';
import {
  ReportHeaderSection,
  ConqueringSection,
} from '../../../components/report';
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
      <AmplifyingSection />
      <TransformingEnvironment />
      <RespondingSection />
      <EstablishingSection />
      <LeadingSection />
      <EnvisioningSection />
    </div>
  );
}
