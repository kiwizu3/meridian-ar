import { PDF_MAPPING } from '../../data/pdfMapping';

interface CheckboxItemProps {
  id: string;
  checked: boolean;
  onChange: (id: string) => void;
}

function CheckboxItem({ id, checked, onChange }: CheckboxItemProps) {
  const pdfInfo = PDF_MAPPING[id];
  if (!pdfInfo) return null;

  return (
    <label htmlFor={id} className="flex items-start gap-2 cursor-pointer">
      <input 
        id={id} 
        type="checkbox" 
        className="mt-1 mr-2" 
        checked={checked}
        onChange={() => onChange(id)}
      />
      <span className="text-white text-sm">{pdfInfo.title}</span>
    </label>
  );
}

interface CheckboxSectionProps {
  title: string;
  sectionIds: string[];
  selectedSections: string[];
  onCheckboxChange: (id: string) => void;
}

export function CheckboxSection({ title, sectionIds, selectedSections, onCheckboxChange }: CheckboxSectionProps) {
  return (
    <div>
      <h3 className="font-bold text-white mb-2">{title}</h3>
      <div className="flex flex-col gap-2">
        {sectionIds.map(id => (
          <CheckboxItem
            key={id}
            id={id}
            checked={selectedSections.includes(id)}
            onChange={onCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
}

// Section configurations
export const SECTION_CONFIGS = [
  {
    title: "1. Report Navigation",
    sectionIds: ['nav-oath', 'nav-vision', 'nav-innovate', 'nav-carbon', 'nav-guide', 'nav-intro', 'nav-about']
  },
  {
    title: "2. The Company",
    sectionIds: ['co-lbf', 'co-socio', 'co-awards', 'co-finhi', 'co-nonfin', 'co-strat', 'co-snap']
  },
  {
    title: "3. Management Discussion and Analysis",
    sectionIds: ['mda-chair', 'mda-md', 'mda-bmvc', 'mda-oe', 'mda-ise', 'mda-mat', 'mda-ltss', 'mda-b25']
  },
  {
    title: "4. Management Discussion and Analysis",
    sectionIds: ['mda2-web', 'mda2-lead', 'mda2-gov', 'mda2-pledge', 'mda2-ops', 'mda2-green', 'mda2-prod', 'mda2-climate', 'mda2-esg', 'mda2-road', 'mda2-act', 'mda2-journey']
  },
  {
    title: "5. Management Discussion and Analysis",
    sectionIds: ['mda3-ffc', 'mda3-smc', 'mda3-tip', 'mda3-fhc', 'mda3-mic', 'mda3-csrc', 'mda3-nnc', 'mda3-busrev', 'mda3-subs']
  },
  {
    title: "6. Corporate Stewardship",
    sectionIds: ['cs-chair', 'cs-ids', 'cs-gov', 'cs-bod', 'cs-senior', 'cs-risk']
  },
  {
    title: "7. Financial Information",
    sectionIds: ['fin-high', 'fin-cal', 'fin-audit', 'fin-inc', 'fin-spl', 'fin-pos', 'fin-eq', 'fin-cash', 'fin-notes']
  },
  {
    title: "8. Supplementary Information",
    sectionIds: ['supp-invest', 'supp-decade', 'supp-quarter', 'supp-gov', 'supp-gri', 'supp-anti', 'supp-isa', 'supp-org', 'supp-corp', 'supp-feedback']
  }
];
