import React, { Component } from 'react';
import './App.scss';
import GroupDisplay from '../components/GroupDisplay/GroupDisplay';
import MemberDisplay from '../components/MemberDisplay/MemberDisplay';

// TODO GTB-工程实践: - 没有小步提交
// TODO GTB-完成度: * 没有联调后端，功能没有实现
// TODO GTB-完成度: * 完成度太低，知识点运用和工程实践没法验证
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO GTB-工程实践: - 列表命名为GroupList比较合理 */}
        <GroupDisplay />
        <MemberDisplay />
      </div>
    );
  }
}

export default App;
