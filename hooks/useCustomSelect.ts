import { useEffect, useState } from "react";

import { IZCustomSelectOption } from "@typings/api/shared";

interface UseCustomSelectParams {
  value: string | null | undefined;
  list: IZCustomSelectOption[];
  onChange: (value: string) => void;
  onToggle?: (value: boolean) => void;
  hasCustomSelectedComponent?: boolean;
  search: string;
}

export const useCustomSelect = ({
  value,
  list,
  onChange,
  onToggle,
  hasCustomSelectedComponent,
  search
}: UseCustomSelectParams) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [listData, setList] = useState<IZCustomSelectOption[]>(list);
  const [selectedValueComponent, setSelectedValueComponent] =
    useState<React.ReactNode>();

  const toggleSelect = (value: boolean) => {
    setIsOpen(value);
    onToggle && onToggle(value);
  };

  const handleChange = (data: IZCustomSelectOption) => {
    setSelectedValueComponent(
      hasCustomSelectedComponent ? data.customSelectedComponent : data.component
    );
    setIsOpen(false);
    onChange(data.value);
    onToggle && onToggle(false);
  };

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  const handleSearch = (searchString: string) => {
    if (searchString) {
      const resultData = list.filter(elem => {
        const keywords = elem.searchKeywords?.split(",");
        if (keywords && keywords?.length > 0) {
          const result = keywords.filter(data => {
            return data.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
          });
          return result.length > 0;
        }
        return null;
      });
      setList(resultData);
    } else {
      setList(list);
    }
  };

  useEffect(() => {
    if (value) {
      const data: IZCustomSelectOption | undefined = list.find(elem => {
        return elem.value === value;
      });
      if (data) {
        setSelectedValueComponent(
          hasCustomSelectedComponent
            ? data.customSelectedComponent
            : data.component
        );
      }
    }
    setList(list);
  }, [list, value, hasCustomSelectedComponent]);

  return {
    isOpen,
    listData,
    selectedValueComponent,
    toggleSelect,
    handleChange,
    handleSearch
  };
};
