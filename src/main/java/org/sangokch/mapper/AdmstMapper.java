package org.sangokch.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.sangokch.model.Admst;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface AdmstMapper {
	public List<Admst> selectAdmstList(Map<String, String> params);
	public List<String> selectAuthority(Admst admst);
	public void insertAdmst(Admst admst);
	public void updateAdmst(Admst admst);
}
