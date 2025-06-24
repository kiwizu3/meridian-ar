'use client';

import Image from 'next/image';

interface Data {
  img: any;
  backgroundColor: string;
}

interface Props {
  data: Data;
  onOpen: () => void;
}

export default function ReportCard({ data, onOpen }: Props) {
  return (
    <div
      className="report-card"
      style={{
        background: data.backgroundColor,
      }}
    >
      <button type="button" className="open-modal-btn" onClick={onOpen} />
      <Image src={data.img} width={100} height={100} alt="icon" />
    </div>
  );
}
