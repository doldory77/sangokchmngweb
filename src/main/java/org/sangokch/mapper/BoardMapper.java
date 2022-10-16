package org.sangokch.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.sangokch.model.AttchFile;
import org.sangokch.model.Board;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface BoardMapper {
	public List<Board> selectBoard(Map<String, Object> params);
	public int selectBoardTotalCnt();
	public List<AttchFile> selectAttchFile(Map<String, Object> params);
	public void insertBoard(Board board);
	public int updateBoard(Board board);
	public void insertFile(AttchFile file);
	public int deleteFile(AttchFile file);
}
