package org.sangokch.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface BibleMapper {
	public List<Map<String, Object>> selectBibleList(Map<String, Object> params);
	public List<Map<String, Object>> selectHymnList(Map<String, Object> params);
}
