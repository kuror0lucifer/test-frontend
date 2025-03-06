import { FC, useEffect, useRef, useState, WheelEvent } from 'react';
import { TabsContent, TabsWrapper } from './DepartmentTabs.styles';
import { departments, DepartmentsKeys } from '../../types/departments';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../../redux/activeTab/slice';
import { selectActiveTab } from '../../redux/activeTab/selectors';
import { useTranslation } from 'react-i18next';
import formatDepartmentsEN from '../../utils/formatDepartmentsEN';

export const DepartmentTabs: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);
  const [currentTab, setCurrentTab] = useState<DepartmentsKeys | null>(
    activeTab
  );
  const tabs = Object.keys(departments) as DepartmentsKeys[];
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const handleTabClick = (department: DepartmentsKeys) => {
    setCurrentTab(prev => (prev === department ? null : department));
    dispatch(setActiveTab(department));
  };

  const handleWheel = (e: unknown) => {
    const WheelEvent = e as WheelEvent<HTMLDivElement>;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += WheelEvent.deltaY * 30;
      WheelEvent.preventDefault();
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;

    if (!ref) return;

    ref.addEventListener('wheel', handleWheel);

    return () => {
      ref.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <TabsWrapper
      ref={scrollRef}
      onWheel={handleWheel}
    >
      {tabs.map((key, index) => (
        <TabsContent
          key={index}
          $isActive={currentTab === key}
          onClick={() => handleTabClick(key)}
        >
          {currentLocale === 'en' ? formatDepartmentsEN(key) : departments[key]}
        </TabsContent>
      ))}
    </TabsWrapper>
  );
};
