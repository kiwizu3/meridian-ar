// 'use client';
// import { ReactElement } from 'react';
// import dynamic from 'next/dynamic';
// import ModalDialog from '../sustainability/modalDialog';

// type TabItem = {
//   id: number;
//   label: string;
//   content: ReactElement;
// };

// interface Props {
//   isOpen: boolean;
//   onOpenChange: () => void;
//   tabs: TabItem[];
// }

// export default function PopUpModel({ isOpen, onOpenChange, tabs }: Props) {
//   return (
//     <ModalDialog isOpen={isOpen} onOpenChange={onOpenChange} tabs={tabs} />
//   );
// }

'use client';

import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';

interface PopUpModelProps {
  isOpen: boolean;
  onOpenChange: () => void;
  tabs?: {
    id: number;
    label: string;
    content: React.ReactElement;
  }[];
}

export default function PopUpModel({
  isOpen,
  onOpenChange,
  tabs = [],
}: PopUpModelProps) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="5xl"
      scrollBehavior="inside"
      className="sus-modal h-[80vh] bg-themeGreen"
    >
      <ModalContent className="modal-content modal-height">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 bg-themeGreen ">
              <div className="flex justify-between items-center w-full">
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-gray-100"
                ></button>
              </div>
            </ModalHeader>
            <ModalBody className="bg-themeGreen tab-item-body custom-scrollbar">
              {tabs.length > 0 ? (
                tabs[0].content
              ) : (
                <div className="text-center py-10">No content available</div>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
