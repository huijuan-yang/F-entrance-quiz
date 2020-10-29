import React from 'react';
import './GroupDisplay.css';

// TODO GTB-工程实践: - css class命名不符合规范，不建议用驼峰
// TODO GTB-工程实践: - 命名不符合业务功能，看不出来职责，命名应该更贴合业务或功能
class GroupDisplay extends React.Component {
  render() {
    return (
      <div className="groupBody">
        {/* TODO GTB-工程实践: - nav标签不太合理，header更符合 */}
        <nav className="nav">
          <h3>分组列表</h3>
          <button type="button" className="groupButton">
            分组学员
          </button>
        </nav>
        <div className="tableContainer">
          {/* TODO GTB-知识点: - 用table标签不合理 */}
          <table className="groupTable">
            <thead className="thead">1组</thead>
            <div className="tableBody">
              <tbody className="tbody">成吉思汗</tbody>
            </div>
          </table>
        </div>
      </div>
    );
  }
}

export default GroupDisplay;
