'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SustainabilityImage from '../../public/images/Susta Tree 1.svg';
import './style.css';
import SpeechText from '../SpeechText';

export default function ValueCreationModel({ dictionary }: any) {
  return (
    <div className="creation-model-wrap !container px-4">
      <div className="creation-model-inner">
        <div className="text-center mb-3 md:mb-1">
          <SpeechText>
            <p className="sus-heading md:md:!leading-[6rem]">
              {dictionary?.sustainability}
            </p>
            <p className="sus-heading gradient-text md:!leading-[6rem] !leading-[3rem]">
              {dictionary?.value_creation_model}
            </p>
          </SpeechText>
        </div>
        <div className="sus-para text-center font-secondary">
          <SpeechText>
            <p>{dictionary?.lb_finance_continues_its_journey}</p>
          </SpeechText>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Top-left box */}
          <motion.div
            initial={{ y: '-20px', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, ease: 'linear' }}
            className="bg-[#17634F] rounded-2xl flex flex-col justify-between w-full min-h-[330px] p-10"
          >
            <div>
              <div className="text-lg font-medium my-5">
                <SpeechText>
                  <p className="whitespace-pre-line">
                    {dictionary?.financial_stability}
                  </p>
                </SpeechText>
              </div>
              <div className="para">
                <SpeechText>
                  <p>{dictionary?.financial_stability_is_crucial}</p>
                </SpeechText>
              </div>
            </div>
          </motion.div>
          {/* <div className="flex-section"> */}

          {/* top-right box */}
          <div>
            <motion.div
              initial={{ x: '-20px', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2, ease: 'linear' }}
              className="bg-[#17634F] rounded-2xl flex flex-col justify-between w-full min-h-[330px] p-10"
            >
              <div className="text-box font-secondary">
                <div className="text-lg font-medium my-5">
                  <SpeechText>
                    <p className="whitespace-pre-line">
                      {dictionary?.work_place}
                    </p>
                  </SpeechText>
                </div>
                <div className="para">
                  <SpeechText>
                    <p>{dictionary?.we_seek_to_create_a_great_workplace}</p>
                  </SpeechText>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                repeat: 0,
                ease: 'easeInOut',
              }}
            >
              <Image src={SustainabilityImage} alt="sustainability-circle" />
            </motion.div>
          </div>

          {/* Bottom-left box */}
          <div>
            <motion.div
              initial={{ x: '20px', opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2 }}
              className="bg-[#17634F] rounded-2xl flex flex-col justify-between w-full min-h-[330px] p-8"
            >
              <div className="text-box font-secondary">
                <div className="text-lg font-medium my-5">
                  <SpeechText>
                    <p className="whitespace-pre-line">
                      {dictionary?.inclusive_growth}
                    </p>
                  </SpeechText>
                </div>
                <div className="para">
                  <SpeechText>
                    <p>{dictionary?.inclusive_growth_impacts_on}</p>
                  </SpeechText>
                </div>
              </div>
            </motion.div>
          </div>
          {/* </div> */}

          {/* Bottom-right box */}
          <motion.div
            initial={{ y: '20px', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="bg-[#17634F] rounded-2xl flex flex-col justify-between w-full min-h-[330px] p-5"
          >
            <div>
              <div className="text-lg font-medium my-5">
                <SpeechText>
                  <p className="whitespace-pre-line">
                    {dictionary?.positive_environmental_impact}
                  </p>
                </SpeechText>
              </div>
              <div className="para">
                <SpeechText>
                  <p>{dictionary?.reducing_direct_and_indirect_impacts}</p>
                </SpeechText>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
