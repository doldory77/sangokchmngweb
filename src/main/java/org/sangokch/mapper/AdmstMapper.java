package org.sangokch.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.sangokch.model.Admst;
import org.sangokch.model.Auth;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface AdmstMapper {
	public List<Admst> selectAdmstList(Map<String, Object> params);
	public List<String> selectAuthority(Admst admst);
	public void insertAdmst(Admst admst);
	public void updateAdmst(Admst admst);
	public void deleteAdmst(Admst admst);
	
	public List<Auth> selectAuth(Map<String, Object> params);
	public void insertAuth(Auth auth);
	public void deleteAuth(Auth auth);
	
	public List<Map<String, Object>> selectDashBoard(Map<String, Object> params);
}
