import React from "react";
import { ROUTES } from "../../../../router/Routes";
import LinkTo from "../../../ui/Link/LinkTo";
import { MenuItemBox, MenuItemDefault } from "../Headers.style";

const navItems = {
  common: [
    {
      to: ROUTES.MYPAGE.path,
      name: "마이페이지",
      role: "common",
    },
    {
      to: ROUTES.LOGOUT.path,
      name: "로그아웃",
      role: "common",
    },
  ],
  admin: [
    {
      to: ROUTES.ADMINMENU.path,
      name: "관리자페이지",
      role: "admin",
    },
    {
      to: ROUTES.LOGOUT.path,
      name: "로그아웃",
      role: "admin",
    },
  ],
  non: [
    {
      to: ROUTES.LOGIN.path,
      name: "로그인",
      role: "non",
    },
    {
      to: ROUTES.REGISTER.path,
      name: "회원가입",
      role: "non",
    },
  ],
};

const style = { textDecoration: "none", padding: "24px", width: "100%" };

function Menu(props) {
  switch (props.role) {
    case "User": {
      return (
        <div>
          <MenuItemDefault>
            <LinkTo
              there={{ to: ROUTES.ORDER.path, name: "메뉴" }}
              style={style}
            />
          </MenuItemDefault>
          <MenuItemDefault>
            <LinkTo
              there={{ to: ROUTES.RECIPE.path, name: "꿀조합" }}
              style={style}
            />
          </MenuItemDefault>
          {navItems.common.map((item) => {
            return (
              <MenuItemBox role={item.role}>
                <LinkTo
                  there={{ to: item.to, name: item.name }}
                  style={style}
                />
              </MenuItemBox>
            );
          })}
        </div>
      );
    }
    case "Admin": {
      return (
        <div>
          <MenuItemDefault>
            <LinkTo
              there={{ to: ROUTES.ORDER.path, name: "메뉴" }}
              style={style}
            />
          </MenuItemDefault>
          <MenuItemDefault>
            <LinkTo
              there={{ to: ROUTES.RECIPE.path, name: "꿀조합" }}
              style={style}
            />
          </MenuItemDefault>
          {navItems.admin.map((item) => {
            return (
              <MenuItemBox role={item.role}>
                <LinkTo
                  there={{ to: item.to, name: item.name }}
                  style={style}
                />
              </MenuItemBox>
            );
          })}
        </div>
      );
    }
    case "": {
      return (
        <div>
          <MenuItemDefault>
            <LinkTo
              there={{ to: ROUTES.ORDER.path, name: "메뉴" }}
              style={style}
            />
          </MenuItemDefault>
          <MenuItemDefault>
            <LinkTo
              there={{ to: ROUTES.RECIPE.path, name: "꿀조합" }}
              style={style}
            />
          </MenuItemDefault>
          {navItems.non.map((item) => {
            return (
              <MenuItemBox role={item}>
                <LinkTo
                  there={{ to: item.to, name: item.name }}
                  style={style}
                />
              </MenuItemBox>
            );
          })}
        </div>
      );
    }
  }
}

export default Menu;
