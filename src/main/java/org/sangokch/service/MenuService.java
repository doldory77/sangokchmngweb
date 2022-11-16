package org.sangokch.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.sangokch.mapper.MenuMapper;
import org.sangokch.model.Menu;
import org.sangokch.util.MapX;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MenuService {

	@Autowired
	MenuMapper menuMapper;
	
	public List<Menu> selectAuthMenu() {
		List<Menu> mainMenus = menuMapper.selectMenu(new MapX("parent_menu_cd", "00000000").getMap());
		List<Menu> subMenus = menuMapper.selectAuthMenu();
		for (int i=0; i<mainMenus.size(); i++) {
			mainMenus.get(i).setSubMenu(new ArrayList<Menu>());
			for (int j=0; j<subMenus.size(); j++) {
				if (mainMenus.get(i).getMenu_cd().equals(subMenus.get(j).getParent_menu_cd())) {
					mainMenus.get(i).getSubMenu().add(subMenus.get(j));
				}
			}
		}
		return mainMenus;
	}
	
	public List<Menu> selectMenu(Map<String, Object> params) {
		return menuMapper.selectMenu(params);
	}
	
	public void saveMenu(List<Menu> menus) {
		for (int i=0; i<menus.size(); i++) {
			if ("I".equals(menus.get(i).getStt())) {
				menuMapper.insertMenu(menus.get(i));
			}
			if ("U".equals(menus.get(i).getStt())) {
				menuMapper.updateMenu(menus.get(i));
			}
		}
	}
}
