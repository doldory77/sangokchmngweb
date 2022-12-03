package org.sangokch.service;

import java.util.List;
import java.util.Map;

import org.sangokch.mapper.AdmstMapper;
import org.sangokch.model.Admst;
import org.sangokch.model.Auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdmstService {
	
	@Autowired
	AdmstMapper admstMapper;
	
	public Admst loginAdmst(Map<String, Object> params) {
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
	
	public List<Admst> selectAdmstList(Map<String, Object> params) {
		return admstMapper.selectAdmstList(params);
	}
	
	public void saveAdmstList(List<Admst> admsts) {
		for (int i=0; i<admsts.size(); i++) {
			if ("D".equals(admsts.get(i).getStt())) {
				admstMapper.deleteAdmst(admsts.get(i));
			}
		}
		
		for (int i=0; i<admsts.size(); i++) {
			if ("I".equals(admsts.get(i).getStt())) {
				admstMapper.insertAdmst(admsts.get(i));
			}
			if ("U".equals(admsts.get(i).getStt())) {
				admstMapper.updateAdmst(admsts.get(i));
			}
		}
	}
	
	public List<Auth> selectAuth(Map<String, Object> params) {
		return admstMapper.selectAuth(params);
	}
	
	public void saveAuthList(List<Auth> auths) {
		for (int i=0; i<auths.size(); i++) {
			if ("D".equals(auths.get(i).getStt())) {
				admstMapper.deleteAuth(auths.get(i));
			}
		}
		
		for (int i=0; i<auths.size(); i++) {
			if ("I".equals(auths.get(i).getStt())) {
				admstMapper.insertAuth(auths.get(i));
			}
		}
	}
	
	public List<Map<String, Object>> selectDashBoard(Map<String, Object> params) {
		return admstMapper.selectDashBoard(params);
	}	
}
