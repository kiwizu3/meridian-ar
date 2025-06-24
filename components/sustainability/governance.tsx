import SpeechText from '../SpeechText';

export default function Governance({ dictionary }: any) {
  return (
    <div className="creation-model-wrap governance-wrap !container px-4">
      <div className="creation-model-inner">
        <div className="text-center">
          <SpeechText>
            <p className="sus-heading md:!leading-[6rem] !leading-[3rem]">
              {dictionary?.esg}
            </p>
            <p className="gradient-text sus-heading md:!leading-[6rem] !leading-[3rem]">
              {dictionary?.governance}
            </p>
          </SpeechText>
        </div>
        <div className="governance-section">
          <div className="left-side">
            <div className="governance-item director font-secondary">
              <SpeechText>
                <p>{dictionary?.board_of_directors}</p>
              </SpeechText>
            </div>
            <div className="governance-item capitalize font-secondary">
              <SpeechText>
                <p>{dictionary?.board_sustainability_committee}</p>
              </SpeechText>
            </div>
            <div className="governance-item font-secondary capitalize">
              <SpeechText>
                <p>{dictionary?.sustainability_management_committee}</p>
              </SpeechText>
            </div>
            <div className="governance-item font-secondary capitalize">
              <SpeechText>
                <p>{dictionary?.senior_manager_digital}</p>
              </SpeechText>
            </div>
            <div className="governance-item font-secondary capitalize">
              <SpeechText>
                <p>{dictionary?.manager_sustainability_corporate_reporting}</p>
              </SpeechText>
            </div>
          </div>
          <div className="right-side">
            <div className="para font-secondary">
              <SpeechText>
                <p>{dictionary?.the_esg_governance_structure}</p>
              </SpeechText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
