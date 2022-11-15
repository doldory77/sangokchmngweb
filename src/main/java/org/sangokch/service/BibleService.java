package org.sangokch.service;

import java.util.List;
import java.util.Map;

import org.sangokch.mapper.BibleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BibleService {
	
	@Autowired
	BibleMapper bibleMapper;
	
	public List<Map<String, Object>> selectBibleList(Map<String, Object> params) {
		return bibleMapper.selectBibleList(params);
	}
	
	public List<Map<String, Object>> selectHymnList(Map<String, Object> params) {
		return bibleMapper.selectHymnList(params);
	}
}
