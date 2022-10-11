package org.sangokch.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.sangokch.model.Menu;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MenuMapper {
	public void insertMenu(Menu menu);
}
