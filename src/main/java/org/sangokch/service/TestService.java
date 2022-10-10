package org.sangokch.service;

import org.sangokch.mapper.TestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;

@Service
@Transactional
public class TestService {

	@Autowired
	TestMapper mapper;
	
	@Autowired
	PlatformTransactionManager manager;
	
	public int totSize(String parentCd) {
		TransactionStatus status = manager.getTransaction(new DefaultTransactionDefinition());
		int totSize = 0;
		try {
			totSize = mapper.totSize(parentCd);
//			manager.commit(status);
			
		} catch (Exception e) {
//			manager.rollback(status);
			throw new RuntimeException(e.getMessage());
		}
		return totSize;
	}
}
