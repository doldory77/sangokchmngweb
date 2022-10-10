package org.sangokch.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.sangokch.mapper.BoardMapper;
import org.sangokch.model.AttchFile;
import org.sangokch.model.Board;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class BoardService {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass().getSimpleName());

	@Value("${spring.servlet.multipart.location}")
	String filePath;
	
	@Autowired
	BoardMapper boardMapper;
	
	@Autowired
	PlatformTransactionManager manager;
	
	@Transactional
	public void insertBoard(Board board, MultipartFile[] files, String[] fileNames) {
		List<File> savedFileList = new ArrayList<>();
		try {
			boardMapper.insertBoard(board);
			System.out.println(board.getBno());
			for (int i=0; i<files.length; i++) {
				if (i==1) throw new Exception("일부로 오류 발생시킴");
				AttchFile file = new AttchFile();
				file.setBno(board.getBno());
				file.setFile_nm(fileNames[i]);
				file.setFile_path(filePath);
				file.setFile_org_nm(files[i].getOriginalFilename());
				boardMapper.insertFile(file);
				File saveFile = new File(file.getFile_path(), file.getFile_nm());
				files[i].transferTo(saveFile);
				savedFileList.add(saveFile);
			}
		} catch (Exception e) {
			logger.error("insertBoard Error : ", e);
			for (File file: savedFileList) {
				file.delete();
			}
			throw new RuntimeException(e.getMessage());
		}
	}
	
}
