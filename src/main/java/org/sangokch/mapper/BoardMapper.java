package org.sangokch.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.sangokch.model.AttchFile;
import org.sangokch.model.Board;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface BoardMapper {
	public void insertBoard(Board board);
	public void insertFile(AttchFile file);
}
