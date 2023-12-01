import * as Tab from "./style/OrderTab.style";

const tabs = ["접수 대기", "완료"];

const OrderTab = ({ currTab, onClick }) => {
  return (
    <Tab.Container>
      {tabs.map((tab, i) => {
        return (
          <Tab.TabBox key={`${tab}-${i}`} active={currTab === tab} onClick={() => onClick(tab)}>
            {tab}
          </Tab.TabBox>
        );
      })}
    </Tab.Container>
  );
};

OrderTab.defaultProps = {
  currTab: "접수 대기",
  onClick: () => {},
};

export default OrderTab;
