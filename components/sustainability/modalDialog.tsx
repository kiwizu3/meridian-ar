import { Modal, ModalBody, ModalContent, Tab, Tabs } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { memo, ReactElement, Suspense } from 'react';

interface TabItem {
  id: number;
  label: string;
  content: ReactElement;
}

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  tabs: TabItem[];
}

const ModalBodyContentWrapper = dynamic(() => import('./modalBodyContent'), {
  ssr: false,
  suspense: true,
});

function ModalDialog({ isOpen, onOpenChange, tabs }: Readonly<Props>) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="5xl"
      className="sus-modal"
    >
      <ModalContent className="modal-content">
        <ModalBody className="modal-body">
          <h1 className="modal-heading"></h1>
          <div className="tab-wrap">
            <Tabs aria-label="Dynamic tabs" items={tabs} className="tab-inner">
              {(item) => (
                <Tab
                  key={item.id}
                  title={item.label}
                  className="tab-item font-secondary"
                >
                  <Suspense fallback={<div>Loading...</div>}>
                    <div className="tab-item-body custom-scrollbar">
                      <ModalBodyContentWrapper item={item} />
                    </div>
                  </Suspense>
                </Tab>
              )}
            </Tabs>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default memo(ModalDialog);
