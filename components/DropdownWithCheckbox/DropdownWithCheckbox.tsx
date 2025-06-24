'use client';

import { Checkbox, Select, SelectItem } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';
import { GraphDataCategories } from '@/types';

interface DropdownWithCheckboxProps {
  selectedValues: string[];
  setSelectedValues: Dispatch<SetStateAction<string[]>>;
  graphCategories: GraphDataCategories[];
  desiredOrder?: string[];
}

const DropdownWithCheckbox: React.FC<DropdownWithCheckboxProps> = ({
  selectedValues,
  setSelectedValues,
  graphCategories,
  desiredOrder,
}) => {
  const handleSelectChange: any = (selectedItems: Set<string>) => {
    const selectedArray = Array.from(selectedItems);

    if (selectedArray?.length === 0) {
      return;
    }

    const sortedSelectedValues: any =
      desiredOrder &&
      selectedArray?.toSorted((a, b) => {
        return desiredOrder.indexOf(a) - desiredOrder.indexOf(b);
      });

    setSelectedValues(sortedSelectedValues);
  };

  return (
    <Select
      selectionMode="multiple"
      aria-label="categories"
      variant="bordered"
      placeholder="Select Categories"
      className="lg:pr-14 lg:max-w-lg"
      classNames={{
        selectorIcon: 'text-white',
        label: 'text-white hover:text-white',
        popoverContent: 'bg-lightBlack financial-dashboard',
        trigger:
          'data-[hover=true]:!bg-blue h-12 border-2 border-[#FFFFFF33] focus:!border-[#FFFFFF33]  data-[open]:!border-[#FFFFFF33] data-[selected]:!bg-[#0B466E]',
        value: 'text-white',
      }}
      onSelectionChange={handleSelectChange}
      selectedKeys={selectedValues}
      listboxProps={{
        itemClasses: {
          base: [
            'rounded-md',
            'py-0',
            'text-white',
            'transition-opacity',
            'data-[hover=true]:text-white',
            'data-[hover=true]:!bg-blue',
            'data-[selectable=true]:focus:bg-blue',
            'data-[selectable=true]:focus:text-white',
            'data-[pressed=true]:opacity-70',
            'data-[focus-visible=true]:ring-default-500',
          ],
        },
      }}
    >
      {graphCategories.map((item: any) => (
        <SelectItem
          key={item.key}
          textValue={item.label}
          aria-label={item.label}
        >
          <Checkbox
            isSelected={selectedValues.includes(item.key)}
            key={`${item.key}-checkbox`}
            radius="none"
            className="border-r-0 text-white hover:!bg-transparent data-[hover=true]:bg-blue"
            classNames={{
              label: 'text-white data-[hover=true]:bg-blue w-[365px] py-2',
              wrapper:
                'after:bg-transparent text-white hover:!bg-transparent data-[hover=true]:bg-blue data-[selectable=true]:focus:text-white',
            }}
          >
            {item.label}
          </Checkbox>
        </SelectItem>
      ))}
    </Select>
  );
};

export default DropdownWithCheckbox;
