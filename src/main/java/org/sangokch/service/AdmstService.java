package org.sangokch.service;

import java.util.List;
import java.util.Map;

import org.sangokch.mapper.AdmstMapper;
import org.sangokch.model.Admst;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdmstService {
	
	@Autowired
	AdmstMapper admstMapper;
	
	public Admst loginAdmst(Map<String, String> params) {
		if (params.get("id") == null || params.get("passwd") == null) {
			throw new RuntimeException("아이디 및 패스워드를 확인해 주세요");
		}
		List<Admst> list = admstMapper.selectAdmstList(params);
		if (list == null || list.size() == 0) {
			throw new RuntimeException("아이디 및 패스워드를 확인해 주세요");
		}
		Admst admst = list.get(0);
		List<String> authorities = admstMapper.selectAuthority(admst);
		admst.setAuthorities(authorities);
		return admst;
		
	}
}
