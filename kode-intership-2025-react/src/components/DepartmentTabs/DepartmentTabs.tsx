import { FC, useState } from 'react';
import { TabsContent, TabsWrapper } from './DepartmentTabs.styles';
import { departments, DepartmentsKeys } from '../../types/departments';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/activeTab/slice';
import { selectActiveTab } from '../../redux/activeTab/selectors';

export const DepartmentTabs: FC = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);
  const [currentTab, setCurrentTab] = useState<DepartmentsKeys | null>(
    activeTab
  );
  const tabs = Object.keys(departments) as DepartmentsKeys[];

  const handleTabClick = (department: DepartmentsKeys) => {
    setCurrentTab(prev => (prev === department ? null : department));
    dispatch(setActiveTab(department));
  };

  return (
    <TabsWrapper>
      {tabs.map((key, index) => (
        <TabsContent
          key={index}
          $isActive={currentTab === key}
          onClick={() => handleTabClick(key)}
        >
          {departments[key]}
        </TabsContent>
      ))}
    </TabsWrapper>
  );
};
