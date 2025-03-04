import { FC, useState } from 'react';
import { TabsContent, TabsWrapper } from './DepartmentTabs.styles';
import { departments, DepartmentsKeys } from '../../types/departments';

export const DepartmentTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<DepartmentsKeys | null>('all');
  const tabs = Object.keys(departments) as DepartmentsKeys[];

  const handleTabClick = (department: DepartmentsKeys) => {
    setActiveTab(prev => (prev === department ? null : department));
  };

  return (
    <TabsWrapper>
      {tabs.map((key, index) => (
        <TabsContent
          key={index}
          $isActive={activeTab === key}
          onClick={() => handleTabClick(key)}
        >
          {departments[key]}
        </TabsContent>
      ))}
    </TabsWrapper>
  );
};
