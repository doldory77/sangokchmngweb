package org.sangokch.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.sangokch.model.Menu;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MenuMapper {
	public List<Menu> selectMenu(Map<String, Object> params);
	public List<Menu> selectAuthMenu();
	public void insertMenu(Menu menu);
	public void updateMenu(Menu menu);
}
