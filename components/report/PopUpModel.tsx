'use client';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import ModalDialog from '../sustainability/modalDialog';

type TabItem = {
  id: number;
  label: string;
  content: ReactElement;
};

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  tabs: TabItem[];
}

export default function PopUpModel({ isOpen, onOpenChange, tabs }: Props) {
  return (
    <ModalDialog isOpen={isOpen} onOpenChange={onOpenChange} tabs={tabs} />
  );
}
