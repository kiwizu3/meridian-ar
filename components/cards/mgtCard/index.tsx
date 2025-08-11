import Calender from '@/components/icons/calender';
import { CardProps } from '@/types';

const MgtCard: React.FC<CardProps> = ({
  name,
  role,
  appointedInfo,
  appointedDate,
  additionalInfo,
  additionalDate,
  imgSrc,
  bgColor,
  circleColors,
}) => {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className={`rounded-b-lg text-white ${bgColor} w-full h-[500px]`}>
        <div className="px-6 pt-3">
          <img src={imgSrc} alt={name} className="mb-4" />
        </div>
        <div className="w-full h-1 bg-[#d4a262] border-0" />
        <div className="px-6 py-3 grid gap-4">
          <div>
            <h3 className="font-bold text-lg text-white">{name}</h3>
            <p className="text-sm font-medium text-black">{role}</p>
          </div>
          {appointedInfo && (
            <div className="flex gap-4">
              <div>
                <Calender width={40} height={40} />
              </div>
              <div>
                <p className="text-sm text-[#eee1cd] font-bold">
                  {appointedInfo}
                </p>
                <p className="text-sm">{appointedDate}</p>
              </div>
            </div>
          )}
          {additionalInfo && (
            <div className="flex gap-4">
              <div>
                <Calender width={40} height={40} />
              </div>
              <div>
                <p className="text-sm text-[#eee1cd] font-bold">
                  {additionalInfo}
                </p>
                <p className="text-sm">{additionalDate}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mx-4 flex gap-2">
        {circleColors?.map((color, index) => (
          <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
        ))}
      </div>
      <div className="w-full h-1 bg-[#d4a262] border-0" />
    </div>
  );
};

export default MgtCard;
