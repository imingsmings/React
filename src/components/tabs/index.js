import { Suspense } from 'react';
import { Tabs } from 'antd';
import { generateTabs } from './utils';
const { TabPane } = Tabs;

const TabPanes = (props) => {
  const { children, isDynamic, defaultTab } = props;
  const tabs = [];

  children && !children.length && tabs.push(generateTabs(children));

  if (children && children.length) {
    for (const item of children) {
      tabs.push(generateTabs(item));
    }
  }

  const _onChange = (key) => {
    console.log(key);
  };

  return (
    tabs.length !== 0 && (
      <Tabs defaultActiveKey={`${defaultTab}`} onChange={_onChange}>
        {tabs.map((item) => {
          return (
            <TabPane tab={item.title} key={item.key}>
              {isDynamic ? (
                <Suspense fallback={<div>{`Loading${item.title}中...`}</div>}>
                  {item.content}
                </Suspense>
              ) : (
                item.content
              )}
            </TabPane>
          );
        })}
      </Tabs>
    )
  );
};

export default TabPanes;
