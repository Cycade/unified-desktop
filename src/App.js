import React from 'react';
import {
  GlobalNavigation,
  Tabs,
} from '@terminus/nusi';

import DailyRoutine from './components/DailyRoutine';

const { TabPane } = Tabs;

const DefaultTabPane = () => <div>Empty Tab</div>;

const tabs = [
  { name: '日常工作', tab: DailyRoutine },
  { name: '商品', tab: DefaultTabPane },
  { name: '订单', tab: DefaultTabPane },
  { name: '退货', tab: DefaultTabPane },
  { name: '营销', tab: DefaultTabPane },
];

const App = () => {  
  const paddingX = {
    paddingLeft: '3vw',
    paddingRight: '3vw',
  }

  return (
    <>
      <GlobalNavigation theme='normal' />

      <h2 style={{ ...paddingX, paddingTop: '3vh', fontWeight: 800 }}>
        {'统一工作台'}
      </h2>

      <Tabs tabBarStyle={paddingX}>
        {tabs.map((e, i) => (
          <TabPane tab={e.name} key={i + 1} style={{ ...paddingX, paddingBottom: '3vh' }}>
            <e.tab />
          </TabPane>
        ))}
      </Tabs>
    </>
  );
}

export default App;
