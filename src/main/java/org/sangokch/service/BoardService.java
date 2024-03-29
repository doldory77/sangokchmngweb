package org.sangokch.service;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.sangokch.mapper.BoardMapper;
import org.sangokch.model.AttchFile;
import org.sangokch.model.Board;
import org.sangokch.util.Const;
import org.sangokch.util.MapX;
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
	
	@Value("${run.env.mode}")
	String envMode;
	
	@Autowired
	BoardMapper boardMapper;
	
	@Autowired
	PlatformTransactionManager manager;
	
	@Transactional
	public void insertBoard(Board board, MultipartFile[] files, String[] fileNames) {
		List<File> savedFileList = new ArrayList<>();
		try {
			boardMapper.insertBoard(board);
			logger.info("run.env.mode : ", envMode);
			if (files != null && files.length > 0) {				
				for (int i=0; i<files.length; i++) {
//				if (i==1) throw new Exception("일부로 오류 발생시킴");
					AttchFile file = new AttchFile();
					file.setBno(board.getBno());
					file.setFile_nm(fileNames[i]);
					file.setFile_path("prod".equalsIgnoreCase(envMode) ? filePath : Const.userDir.concat(filePath));
					file.setFile_org_nm(files[i].getOriginalFilename());
					file.setFile_size(files[i].getSize());
					boardMapper.insertFile(file);
					File saveFile = new File(file.getFile_path(), file.getFile_nm());
					files[i].transferTo(saveFile);
					savedFileList.add(saveFile);
				}
			}
		} catch (Exception e) {
			logger.error("insertBoard Error : ", e);
			for (File file: savedFileList) {
				file.delete();
			}
			throw new RuntimeException(e.getMessage());
		}
	}
	
	public List<Board> selectBoard(Map<String, Object> params) {
		List<Board> boards = null; 
		if (params.containsKey("bno") || params.containsKey("kind_cd")) {
			boards = boardMapper.selectBoard(params);
			for (int i=0; i<boards.size(); i++) {
				Board board = boards.get(i);
				List<AttchFile> files = boardMapper.selectAttchFile(new MapX("bno", board.getBno()).getMap());
				boards.get(i).setAttchFiles(files);
			}
		} else {
			boards = new ArrayList<Board>();
		}
		return boards;
	}
	
	public Map<String, Object> selectBoardToMap(Map<String, Object> params) {
		Map<String, Object> returnMap = new HashMap<>();
		List<Board> boards = null;
		Integer cnt = 0;
		
		if (params.containsKey("bno") || params.containsKey("kind_cd")) {
			boards = boardMapper.selectBoard(params);
			cnt = boardMapper.selectBoardTotalCnt();
			for (int i=0; i<boards.size(); i++) {
				Board board = boards.get(i);
				List<AttchFile> files = boardMapper.selectAttchFile(new MapX("bno", board.getBno()).getMap());
				boards.get(i).setAttchFiles(files);
			}
		} else {
			boards = new ArrayList<Board>();
		}
		returnMap.put("list", boards);
		returnMap.put("totalCnt", cnt);
		return returnMap;
	}
	
	public int selectBoardTotalCnt() {
		return boardMapper.selectBoardTotalCnt();
	}
	
	@Transactional
	public void updateBoard(Board board, MultipartFile[] files, String[] fileNames) {
		List<File> savedFileList = new ArrayList<>();
		try {
			boardMapper.updateBoard(board);
			System.out.println(board.getBno());
			if (files != null && files.length > 0) {				
				for (int i=0; i<files.length; i++) {
//				if (i==1) throw new Exception("일부로 오류 발생시킴");
					AttchFile file = new AttchFile();
					file.setBno(board.getBno());
					file.setFile_nm(fileNames[i]);
					file.setFile_path("prod".equalsIgnoreCase(envMode) ? filePath : Const.userDir.concat(filePath));
					file.setFile_org_nm(files[i].getOriginalFilename());
					boardMapper.insertFile(file);
					File saveFile = new File(file.getFile_path(), file.getFile_nm());
					files[i].transferTo(saveFile);
					savedFileList.add(saveFile);
				}
			}
		} catch (Exception e) {
			logger.error("insertBoard Error : ", e);
			for (File file: savedFileList) {
				file.delete();
			}
			throw new RuntimeException(e.getMessage());
		}
		
	}
	
	public int deleteAttchFile(AttchFile attchFile) {
		List<AttchFile> files = boardMapper.selectAttchFile(new MapX("bno", attchFile.getBno()).put("file_nm", attchFile.getFile_nm()).getMap());
		AttchFile file = files.get(0);
		int result = boardMapper.deleteFile(file);
		if (result > 0) {
			new File(file.getFile_path(), file.getFile_nm()).delete();
		}
		return result;
	}
	
	public int selectNextOrdNo(Map<String, Object> partams) {
		return boardMapper.selectNextOrdNo(partams);
	}
	
}
